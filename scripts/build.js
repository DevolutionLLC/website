#!/usr/bin/env node

/**
 * Build script for Devolution LLC website
 * Minifies CSS and prepares production assets
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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
console.log('📦 Minifying CSS with csso...');
const cssInputPath = path.join(DIST_DIR, 'styles', 'main.css');
const cssOutputPath = path.join(DIST_DIR, 'styles', 'main.min.css');

if (fs.existsSync(cssInputPath)) {
  try {
    // Try using csso-cli for better minification
    execSync(`npx csso ${cssInputPath} -o ${cssOutputPath}`, { stdio: 'pipe' });
    console.log(`✅ CSS minified with csso: ${cssOutputPath}`);
  } catch (err) {
    console.warn('⚠️  csso not available, using fallback minifier...');
    minifyCSS(cssInputPath, cssOutputPath);
    console.log(`✅ CSS minified (basic): ${cssOutputPath}`);
  }
} else {
  console.warn(`⚠️  CSS file not found: ${cssInputPath}`);
}

// Update HTML to use minified CSS in dist
console.log('📝 Updating HTML to reference minified CSS...');
const htmlPath = path.join(DIST_DIR, 'index.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf-8');
  html = html.replace(/href="styles\/main\.css"/g, 'href="styles/main.min.css"');
  fs.writeFileSync(htmlPath, html);
  console.log('✅ HTML updated');
}

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
