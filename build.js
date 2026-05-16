import { readFileSync, writeFileSync } from 'fs';

// Read the Speed Insights module source
const speedInsightsCode = readFileSync('./node_modules/@vercel/speed-insights/dist/index.js', 'utf-8');

// Create a browser-compatible IIFE bundle
const bundle = `// Vercel Speed Insights - Auto-injected
(function() {
  'use strict';
  
  // Create a module object to capture exports
  var module = { exports: {} };
  var exports = module.exports;
  
  // Include the Speed Insights code
  ${speedInsightsCode}
  
  // Get the exported injectSpeedInsights function
  var injectSpeedInsights = module.exports.injectSpeedInsights;
  
  // Auto-inject on page load
  if (typeof injectSpeedInsights === 'function') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        injectSpeedInsights();
      });
    } else {
      injectSpeedInsights();
    }
  }
})();
`;

// Write the bundle
writeFileSync('speed-insights.js', bundle);
console.log('✓ Speed Insights bundle created: speed-insights.js');
console.log('✓ The script will automatically inject Vercel Speed Insights when loaded');
