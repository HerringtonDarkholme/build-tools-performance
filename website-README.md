# Build Tools Performance Infographic Website

A modern, interactive infographic website displaying performance benchmarks for JavaScript build tools and bundlers.

## Features

✨ **Modern Design**: Elite-style design inspired by Apple/Vercel with glassmorphism effects
📊 **Interactive Performance Chart**: Pareto frontier chart displayed prominently on the first screen
🎯 **Focused Interface**: Clean, streamlined design highlighting the most important performance data
📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Quick Start

1. **Start the server**:
   ```bash
   python3 -m http.server 8000
   ```

2. **Open in browser**:
   Visit `http://localhost:8000` in your web browser

## Charts & Interactions

### Interactive Performance Chart
- **Primary focus**: Pareto frontier chart displayed prominently on the first screen
- **X-axis**: Choose between Dev Cold Start, Production Build, Root HMR, or Leaf HMR
- **Y-axis**: Choose between Total Size or Gzipped Size
- **Hover**: Hover over points to see detailed information
- **Highlight**: Points belonging to the same tool are highlighted on hover
- **Description**: Contextual explanation provided below the chart
- **Metrics**: Normalized scores enabled by default (0-100 scale, higher is better)
- **Score Explanation**: Detailed information about how performance scores are calculated



### Test Cases
- **React 1K**: 1,000 components, 1,500 modules
- **React 5K**: 5,000 components, 5,000 modules  
- **React 10K**: 10,000 components, 10,000 modules
- **UI Components**: Popular UI library imports
- **Rome**: Complex TypeScript Node.js project

## Build Tools Included

- **Rspack CLI**: Fast Rust-based bundler
- **Rspack CLI (Lazy)**: With lazy compilation
- **Rsbuild**: Enhanced build tool
- **Rsbuild (Lazy)**: With lazy compilation
- **Vite + Rolldown**: Modern dev experience
- **Vite + Rollup**: Traditional bundling
- **webpack**: Industry standard
- **Rolldown**: Rust-based bundler

## Performance Metrics

- **Dev Cold Start**: Time from dev server start to page loaded
- **Server Start**: Time for dev server to start
- **Page Load**: Time to load page after server ready
- **Root HMR**: Time to HMR after changing root module
- **Leaf HMR**: Time to HMR after changing leaf module
- **Prod Build**: Time to build production bundles
- **Total Size**: Total bundle size (minified)
- **Gzipped Size**: Gzipped bundle size

## Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Charts**: Chart.js for interactive visualizations
- **Fonts**: Inter font family
- **Design**: CSS custom properties, glassmorphism effects
- **Animations**: CSS transitions and keyframes

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Modern CSS with glassmorphism effects
├── data.js             # Performance data and utility functions
├── script.js           # Interactive functionality
└── website-README.md   # This file
```

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge
- Mobile browsers supported

## Data Source

Performance data is extracted from the [build-tools-performance](https://github.com/rspack-contrib/build-tools-performance) repository benchmarks.

## Customization

### Adding New Tools
1. Add tool configuration to `performanceData.tools` in `data.js`
2. Add performance data to test cases


### Adding New Metrics
1. Add metric definition to `performanceData.metrics` in `data.js`
2. Update chart axis options in `script.js`
3. Add data processing logic if needed

### Styling
- Modify CSS custom properties in `:root` for color scheme
- Update glassmorphism effects in component styles
- Adjust responsive breakpoints in media queries

## Performance Tips

- Charts are optimized for smooth interactions
- Data processing is cached for better performance
- Responsive design minimizes layout shifts
- Modern CSS features used for hardware acceleration

Enjoy exploring the performance characteristics of different build tools! 🚀 