# Vercel Speed Insights Configuration

This project has been configured with Vercel Speed Insights (v2.0.0) to track Core Web Vitals and performance metrics.

## Installation

The following components have been added:

1. **package.json** - Added `@vercel/speed-insights` v2.0.0 as a dependency
2. **build.js** - Build script that creates a browser-compatible bundle
3. **speed-insights.js** - Generated bundle that auto-injects Speed Insights
4. **index.html** - Updated to include the Speed Insights script

## How It Works

1. The `@vercel/speed-insights` package is installed via npm
2. The `build.js` script wraps the package into a browser-compatible IIFE (Immediately Invoked Function Expression)
3. The generated `speed-insights.js` file is included in the HTML via a defer script tag
4. On page load, the script automatically calls `injectSpeedInsights()` which:
   - Initializes the Speed Insights queue
   - Loads the Vercel analytics script from `/_vercel/speed-insights/script.js`
   - Begins tracking Core Web Vitals (LCP, FID, CLS, etc.)

## Deployment

When deployed to Vercel:

1. The Speed Insights script will automatically connect to Vercel's analytics infrastructure
2. Metrics will be sent to `/_vercel/speed-insights/vitals` endpoint
3. Data will appear in the Vercel dashboard under the "Speed Insights" tab

## Local Development

For local testing:
- The script loads a debug version from `https://va.vercel-scripts.com/v1/speed-insights/script.debug.js`
- Open browser console to see Speed Insights initialization

## Rebuilding

If you update the `@vercel/speed-insights` package version:

```bash
npm install
npm run build
```

This will regenerate the `speed-insights.js` bundle with the latest version.

## Documentation

For more information, see:
- [Vercel Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
- [Speed Insights Package Documentation](https://vercel.com/docs/speed-insights/package)
