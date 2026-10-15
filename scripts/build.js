#!/usr/bin/env node

/**
 * Build script for Devolution LLC website
 * Uses industry-standard tools: terser for JS, csso for CSS
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { minify } from 'terser';

const SRC_DIR = './src';
const DIST_DIR = './dist';

// Create dist directory if it doesn't exist
if (fs.existsSync(DIST_DIR)) {
  execSync(`rm -rf ${DIST_DIR}`);
}
fs.mkdirSync(DIST_DIR, { recursive: true });

console.log('🔨 Building Devolution LLC website...');

// Copy src to dist
console.log('📋 Copying source files...');
execSync(`cp -r ${SRC_DIR}/* ${DIST_DIR}/`, { stdio: 'inherit' });

// Minify CSS with csso
console.log('📦 Minifying CSS...');
const cssInputPath = path.join(DIST_DIR, 'styles', 'main.css');
const cssOutputPath = path.join(DIST_DIR, 'styles', 'main.min.css');

if (fs.existsSync(cssInputPath)) {
  try {
    execSync(`npx csso ${cssInputPath} -o ${cssOutputPath}`, { stdio: 'pipe' });
    console.log(`✅ CSS minified: ${cssOutputPath}`);
  } catch (err) {
    console.warn('⚠️  csso not available, using fallback minifier...');
    minifyCSS(cssInputPath, cssOutputPath);
    console.log(`✅ CSS minified (fallback): ${cssOutputPath}`);
  }
} else {
  console.warn(`⚠️  CSS file not found: ${cssInputPath}`);
}

// Minify JavaScript files with Terser (not esbuild - avoid main thread blocking)
console.log('📦 Minifying JavaScript with Terser...');
const jsDir = path.join(DIST_DIR, 'scripts');
await minifyJSDirectory(jsDir);

// Update HTML files to use minified assets in dist
console.log('📝 Updating HTML to reference minified assets...');
for (const htmlFile of listHTMLFiles(DIST_DIR)) {
  let html = fs.readFileSync(htmlFile, 'utf-8');
  html = html.replace(/href="(\/?)styles\/main\.css"/g, 'href="$1styles/main.min.css"');
  html = html.replace(/src="(\/?)scripts\/main\.js"/g, 'src="$1scripts/main.min.js"');
  fs.writeFileSync(htmlFile, html);
  console.log(`✅ ${path.relative(DIST_DIR, htmlFile)} updated`);
}

/**
 * Find all HTML files in a directory recursively
 */
function listHTMLFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listHTMLFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Create .nojekyll file for GitHub Pages to serve minified files
console.log('📝 Creating .nojekyll for GitHub Pages...');
fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');
console.log('✅ .nojekyll created');

console.log('\n✨ Build complete! Ready for deployment.');
console.log(`📁 Production files are in: ${DIST_DIR}/`);

/**
 * Simple CSS minification fallback
 */
function minifyCSS(inputPath, outputPath) {
  let css = fs.readFileSync(inputPath, 'utf-8');
  
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove whitespace
  css = css.replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1');
  
  // Remove trailing semicolons before closing brace
  css = css.replace(/;}/g, '}');
  
  // Remove leading/trailing whitespace
  css = css.trim();
  
  fs.writeFileSync(outputPath, css);
}

/**
 * Minify all JavaScript files in a directory recursively using Terser (fallback)
 */
async function minifyJSDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await minifyJSDirectory(fullPath);
    } else if (file.name.endsWith('.js') && !file.name.endsWith('.min.js')) {
      try {
        let jsContent = fs.readFileSync(fullPath, 'utf-8');
        
        // Rewrite imports to use minified versions BEFORE minification
        jsContent = jsContent.replace(/from\s+["'](.+?)\.js["']/g, 'from "$1.min.js"');
        
        // Minify with Terser using production settings
        const result = await minify(jsContent, {
          compress: {
            drop_console: false,
            passes: 2
          },
          mangle: true,
          output: {
            comments: false
          }
        });
        
        if (result.error) {
          console.warn(`  ⚠️  Terser error in ${file.name}: ${result.error.message}`);
          return;
        }
        
        const minPath = fullPath.replace(/\.js$/, '.min.js');
        fs.writeFileSync(minPath, result.code);
        console.log(`  ✅ ${file.name} → ${path.basename(minPath)}`);
      } catch (err) {
        console.warn(`  ⚠️  Failed to minify ${file.name}: ${err.message}`);
      }
    }
  }
}
