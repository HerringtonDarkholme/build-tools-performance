// Performance data extracted from README
const performanceData = {
  tools: {
    'rspack': {
      name: 'Rspack CLI',
      version: '1.4.6',
      color: '#3B82F6', // Blue - swapped with Rsbuild
      icon: '⚡'
    },
    'rspack-lazy': {
      name: 'Rspack CLI (Lazy)',
      version: '1.4.6',
      color: '#60A5FA', // Lighter blue variant - swapped with Rsbuild Lazy
      icon: '🚀'
    },
    'rsbuild': {
      name: 'Rsbuild',
      version: '1.4.6',
      color: '#FF6B35', // Orange - swapped with Rspack CLI
      icon: '🏗️'
    },
    'rsbuild-lazy': {
      name: 'Rsbuild (Lazy)',
      version: '1.4.6',
      color: '#FF8C42', // Lighter orange variant - swapped with Rspack CLI Lazy
      icon: '🎯'
    },
    'vite-rolldown': {
      name: 'Vite (Rolldown + Oxc)',
      version: '7.0.7',
      color: '#646CFF', // Vite brand purple
      icon: '⚡'
    },
    'vite-rollup': {
      name: 'Vite (Rollup + SWC)',
      version: '7.0.4',
      color: '#646CFF', // Vite brand purple
      icon: '🔄'
    },
    'webpack': {
      name: 'webpack (SWC)',
      version: '5.100.0',
      color: '#8DD6F9', // Webpack brand blue (Malibu)
      icon: '📦'
    },
    'rolldown': {
      name: 'Rolldown',
      version: '1.0.0-beta.25',
      color: '#B45309', // Rust/amber color - represents Rust language
      icon: '🎲'
    }
  },
  
  testCases: {
    'react-1k': {
      name: 'React 1K',
      description: 'A React app with 1,000 components and 1,500 modules',
      data: {
        'rspack': {
          devColdStart: 1450,
          serverStart: 1207,
          pageLoad: 243,
          rootHMR: 222,
          leafHMR: 149,
          prodBuild: 1285,
          totalSize: 2846.4,
          gzippedSize: 677.2
        },
        'rspack-lazy': {
          devColdStart: 401,
          serverStart: 346,
          pageLoad: 55,
          rootHMR: 90,
          leafHMR: 92,
          prodBuild: 1353,
          totalSize: 2846.4,
          gzippedSize: 677.2
        },
        'rsbuild': {
          devColdStart: 1479,
          serverStart: 1251,
          pageLoad: 228,
          rootHMR: 206,
          leafHMR: 156,
          prodBuild: 1383,
          totalSize: 2877.4,
          gzippedSize: 678.5
        },
        'rsbuild-lazy': {
          devColdStart: 506,
          serverStart: 369,
          pageLoad: 137,
          rootHMR: 100,
          leafHMR: 66,
          prodBuild: 1386,
          totalSize: 2877.4,
          gzippedSize: 678.5
        },
        'vite-rolldown': {
          devColdStart: 2664,
          serverStart: 120,
          pageLoad: 2543,
          rootHMR: 134,
          leafHMR: 109,
          prodBuild: 842,
          totalSize: 2718.1,
          gzippedSize: 751.9
        },
        'vite-rollup': {
          devColdStart: 2778,
          serverStart: 116,
          pageLoad: 2661,
          rootHMR: 134,
          leafHMR: 106,
          prodBuild: 4709,
          totalSize: 2579.1,
          gzippedSize: 688.5
        },
        'webpack': {
          devColdStart: 7461,
          serverStart: 6839,
          pageLoad: 622,
          rootHMR: 763,
          leafHMR: 730,
          prodBuild: 8901,
          totalSize: 2872.1,
          gzippedSize: 710.2
        }
      }
    },
    
    'react-5k': {
      name: 'React 5K',
      description: 'A React app with 5,000 components and 5,000 modules',
      data: {
        'rspack': {
          devColdStart: 1450,
          serverStart: 1207,
          pageLoad: 243,
          rootHMR: 222,
          leafHMR: 149,
          prodBuild: 1285,
          totalSize: 2846.4,
          gzippedSize: 677.2
        },
        'rspack-lazy': {
          devColdStart: 401,
          serverStart: 346,
          pageLoad: 55,
          rootHMR: 90,
          leafHMR: 92,
          prodBuild: 1353,
          totalSize: 2846.4,
          gzippedSize: 677.2
        },
        'rsbuild': {
          devColdStart: 1479,
          serverStart: 1251,
          pageLoad: 228,
          rootHMR: 206,
          leafHMR: 156,
          prodBuild: 1383,
          totalSize: 2877.4,
          gzippedSize: 678.5
        },
        'rsbuild-lazy': {
          devColdStart: 506,
          serverStart: 369,
          pageLoad: 137,
          rootHMR: 100,
          leafHMR: 66,
          prodBuild: 1386,
          totalSize: 2877.4,
          gzippedSize: 678.5
        },
        'vite-rolldown': {
          devColdStart: 2664,
          serverStart: 120,
          pageLoad: 2543,
          rootHMR: 134,
          leafHMR: 109,
          prodBuild: 842,
          totalSize: 2718.1,
          gzippedSize: 751.9
        },
        'vite-rollup': {
          devColdStart: 2778,
          serverStart: 116,
          pageLoad: 2661,
          rootHMR: 134,
          leafHMR: 106,
          prodBuild: 4709,
          totalSize: 2579.1,
          gzippedSize: 688.5
        },
        'webpack': {
          devColdStart: 7461,
          serverStart: 6839,
          pageLoad: 622,
          rootHMR: 763,
          leafHMR: 730,
          prodBuild: 8901,
          totalSize: 2872.1,
          gzippedSize: 710.2
        }
      }
    },
    
    'react-10k': {
      name: 'React 10K',
      description: 'A React app with 10,000 components and 10,000 modules',
      data: {
        'rspack': {
          devColdStart: 2922,
          serverStart: 2608,
          pageLoad: 313,
          rootHMR: 355,
          leafHMR: 275,
          prodBuild: 2554,
          totalSize: 5996.4,
          gzippedSize: 1367.2
        },
        'rspack-lazy': {
          devColdStart: 398,
          serverStart: 346,
          pageLoad: 52,
          rootHMR: 120,
          leafHMR: 103,
          prodBuild: 2577,
          totalSize: 5996.4,
          gzippedSize: 1367.2
        },
        'rsbuild': {
          devColdStart: 2979,
          serverStart: 2702,
          pageLoad: 277,
          rootHMR: 360,
          leafHMR: 258,
          prodBuild: 2934,
          totalSize: 6054.6,
          gzippedSize: 1367.4
        },
        'rsbuild-lazy': {
          devColdStart: 695,
          serverStart: 516,
          pageLoad: 178,
          rootHMR: 113,
          leafHMR: 109,
          prodBuild: 2915,
          totalSize: 6054.6,
          gzippedSize: 1367.4
        },
        'vite-rolldown': {
          devColdStart: 4363,
          serverStart: 161,
          pageLoad: 4202,
          rootHMR: 171,
          leafHMR: 141,
          prodBuild: 1606,
          totalSize: 5675.8,
          gzippedSize: 1546.6
        },
        'vite-rollup': {
          devColdStart: 4773,
          serverStart: 167,
          pageLoad: 4606,
          rootHMR: 174,
          leafHMR: 135,
          prodBuild: 9433,
          totalSize: 5369.0,
          gzippedSize: 1409.2
        },
        'webpack': {
          devColdStart: 13868,
          serverStart: 12842,
          pageLoad: 1026,
          rootHMR: 3321,
          leafHMR: 2326,
          prodBuild: 17815,
          totalSize: 5994.5,
          gzippedSize: 1464.3
        }
      }
    },
    
    'ui-components': {
      name: 'UI Components',
      description: 'A React app importing UI components from popular libraries',
      data: {
        'rspack': {
          prodBuild: 2619,
          totalSize: 2210.3,
          gzippedSize: 621.7
        },
        'rsbuild': {
          prodBuild: 2907,
          totalSize: 2021.9,
          gzippedSize: 615.9
        },
        'vite-rollup': {
          prodBuild: 9571,
          totalSize: 2037.5,
          gzippedSize: 638.2
        },
        'vite-rolldown': {
          prodBuild: 1284,
          totalSize: 2054.4,
          gzippedSize: 636.3
        },
        'rolldown': {
          prodBuild: 1200,
          totalSize: 2071.2,
          gzippedSize: 637.3
        },
        'webpack': {
          prodBuild: 21616,
          totalSize: 2072.9,
          gzippedSize: 624.9
        }
      }
    },
    
    'rome': {
      name: 'Rome',
      description: 'Complex TypeScript Node.js project with multiple packages',
      data: {
        'rspack': {
          prodBuild: 1848,
          totalSize: 1009.3,
          gzippedSize: 270.9
        },
        'rsbuild': {
          prodBuild: 1777,
          totalSize: 1009.3,
          gzippedSize: 270.9
        },
        'rolldown': {
          prodBuild: 383,
          totalSize: 1016.4,
          gzippedSize: 273.6
        },
        'webpack': {
          prodBuild: 11715,
          totalSize: 1023.3,
          gzippedSize: 272.0
        }
      }
    }
  },
  
  metrics: {
    devColdStart: { name: 'Dev Cold Start', unit: 'ms', description: 'Time from dev server start to page loaded' },
    serverStart: { name: 'Server Start', unit: 'ms', description: 'Time for dev server to start' },
    pageLoad: { name: 'Page Load', unit: 'ms', description: 'Time to load page after server ready' },
    rootHMR: { name: 'Root HMR', unit: 'ms', description: 'Time to HMR after changing root module' },
    leafHMR: { name: 'Leaf HMR', unit: 'ms', description: 'Time to HMR after changing leaf module' },
    prodBuild: { name: 'Prod Build', unit: 'ms', description: 'Time to build production bundles' },
    totalSize: { name: 'Total Size', unit: 'kB', description: 'Total bundle size (minified)' },
    gzippedSize: { name: 'Gzipped Size', unit: 'kB', description: 'Gzipped bundle size' },
    totalSizeScore: { name: 'Total Size Score', unit: 'score', description: 'Relative size score (0=worst, 1=best)' },
    gzippedSizeScore: { name: 'Gzipped Size Score', unit: 'score', description: 'Relative gzipped size score (0=worst, 1=best)' },
    devColdStartScore: { name: 'Dev Cold Start Score', unit: 'score', description: 'Relative dev cold start score (0=slowest, 1=fastest)' },
    serverStartScore: { name: 'Server Start Score', unit: 'score', description: 'Relative server start score (0=slowest, 1=fastest)' },
    pageLoadScore: { name: 'Page Load Score', unit: 'score', description: 'Relative page load score (0=slowest, 1=fastest)' },
    rootHMRScore: { name: 'Root HMR Score', unit: 'score', description: 'Relative root HMR score (0=slowest, 1=fastest)' },
    leafHMRScore: { name: 'Leaf HMR Score', unit: 'score', description: 'Relative leaf HMR score (0=slowest, 1=fastest)' },
    prodBuildScore: { name: 'Prod Build Score', unit: 'score', description: 'Relative prod build score (0=slowest, 1=fastest)' }
  }
};

// Function to calculate relative size and speed scores
function calculateRelativeScores() {
  for (const testCaseKey of Object.keys(performanceData.testCases)) {
    const testCase = performanceData.testCases[testCaseKey];
    const tools = Object.keys(testCase.data);
    
    // Find max values for this test case
    let maxTotalSize = 0;
    let maxGzippedSize = 0;
    let maxDevColdStart = 0;
    let maxServerStart = 0;
    let maxPageLoad = 0;
    let maxRootHMR = 0;
    let maxLeafHMR = 0;
    let maxProdBuild = 0;
    
    for (const tool of tools) {
      const data = testCase.data[tool];
      if (data.totalSize !== undefined) {
        maxTotalSize = Math.max(maxTotalSize, data.totalSize);
      }
      if (data.gzippedSize !== undefined) {
        maxGzippedSize = Math.max(maxGzippedSize, data.gzippedSize);
      }
      if (data.devColdStart !== undefined) {
        maxDevColdStart = Math.max(maxDevColdStart, data.devColdStart);
      }
      if (data.serverStart !== undefined) {
        maxServerStart = Math.max(maxServerStart, data.serverStart);
      }
      if (data.pageLoad !== undefined) {
        maxPageLoad = Math.max(maxPageLoad, data.pageLoad);
      }
      if (data.rootHMR !== undefined) {
        maxRootHMR = Math.max(maxRootHMR, data.rootHMR);
      }
      if (data.leafHMR !== undefined) {
        maxLeafHMR = Math.max(maxLeafHMR, data.leafHMR);
      }
      if (data.prodBuild !== undefined) {
        maxProdBuild = Math.max(maxProdBuild, data.prodBuild);
      }
    }
    
    // Calculate relative scores
    for (const tool of tools) {
      const data = testCase.data[tool];
      // Size scores (smaller is better)
      if (data.totalSize !== undefined && maxTotalSize > 0) {
        data.totalSizeScore = (maxTotalSize - data.totalSize) / maxTotalSize;
      }
      if (data.gzippedSize !== undefined && maxGzippedSize > 0) {
        data.gzippedSizeScore = (maxGzippedSize - data.gzippedSize) / maxGzippedSize;
      }
      // Speed scores (faster is better)
      if (data.devColdStart !== undefined && maxDevColdStart > 0) {
        data.devColdStartScore = (maxDevColdStart - data.devColdStart) / maxDevColdStart;
      }
      if (data.serverStart !== undefined && maxServerStart > 0) {
        data.serverStartScore = (maxServerStart - data.serverStart) / maxServerStart;
      }
      if (data.pageLoad !== undefined && maxPageLoad > 0) {
        data.pageLoadScore = (maxPageLoad - data.pageLoad) / maxPageLoad;
      }
      if (data.rootHMR !== undefined && maxRootHMR > 0) {
        data.rootHMRScore = (maxRootHMR - data.rootHMR) / maxRootHMR;
      }
      if (data.leafHMR !== undefined && maxLeafHMR > 0) {
        data.leafHMRScore = (maxLeafHMR - data.leafHMR) / maxLeafHMR;
      }
      if (data.prodBuild !== undefined && maxProdBuild > 0) {
        data.prodBuildScore = (maxProdBuild - data.prodBuild) / maxProdBuild;
      }
    }
  }
}

// Calculate relative scores after data is defined
calculateRelativeScores();

// Helper functions for data processing
const dataUtils = {
  // Get all data points for pareto chart
  getParetoData: (xMetric, yMetric, normalized = false) => {
    const datasets = [];
    
    for (const toolKey of Object.keys(performanceData.tools)) {
      const tool = performanceData.tools[toolKey];
      const points = [];
      
      for (const caseKey of Object.keys(performanceData.testCases)) {
        const testCase = performanceData.testCases[caseKey];
        const data = testCase.data[toolKey];
        
        if (data) {
          const xScoreMetric = `${xMetric}Score`;
          const yScoreMetric = `${yMetric}Score`;
          
          const xValue = normalized ? data[xScoreMetric] : data[xMetric];
          const yValue = normalized ? data[yScoreMetric] : data[yMetric];
          
          if (xValue !== undefined && yValue !== undefined) {
            points.push({
              x: xValue,
              y: yValue,
              testCase: caseKey,
              tool: toolKey,
              originalX: data[xMetric],
              originalY: data[yMetric]
            });
          }
        }
      }
      
      if (points.length > 0) {
        // Sort points by x-value for better line connections
        points.sort((a, b) => a.x - b.x);
        
        datasets.push({
          label: tool.name,
          data: points,
          backgroundColor: tool.color,
          borderColor: tool.color,
          pointRadius: 8,
          pointHoverRadius: 12,
          borderWidth: 2,
          fill: false,
          tension: 0,
          showLine: true,
          toolKey: toolKey
        });
      }
    }
    
    return datasets;
  },
  

  
  // Get formatted table data for a test case
  getTableData: (testCase) => {
    const caseData = performanceData.testCases[testCase];
    if (!caseData) return null;
    
    const rows = [];
    for (const toolKey of Object.keys(caseData.data)) {
      const tool = performanceData.tools[toolKey];
      const data = caseData.data[toolKey];
      
      rows.push({
        tool: tool.name,
        toolKey: toolKey,
        color: tool.color,
        ...data
      });
    }
    
    return rows;
  },
  


  // Get axis ranges for consistent scaling
  getAxisRanges: (xMetric, yMetric, normalized = false) => {
    let xMin = Number.POSITIVE_INFINITY;
    let xMax = Number.NEGATIVE_INFINITY;
    let yMin = Number.POSITIVE_INFINITY;
    let yMax = Number.NEGATIVE_INFINITY;
    
    // Collect all data points
    for (const toolKey of Object.keys(performanceData.tools)) {
      for (const caseKey of Object.keys(performanceData.testCases)) {
        const testCase = performanceData.testCases[caseKey];
        const data = testCase.data[toolKey];
        
        if (data) {
          const xScoreMetric = `${xMetric}Score`;
          const yScoreMetric = `${yMetric}Score`;
          
          const xValue = normalized ? data[xScoreMetric] : data[xMetric];
          const yValue = normalized ? data[yScoreMetric] : data[yMetric];
          
          if (xValue !== undefined && yValue !== undefined) {
            xMin = Math.min(xMin, xValue);
            xMax = Math.max(xMax, xValue);
            yMin = Math.min(yMin, yValue);
            yMax = Math.max(yMax, yValue);
          }
        }
      }
    }
    
    // Add padding
    const xPadding = (xMax - xMin) * 0.1;
    const yPadding = (yMax - yMin) * 0.1;
    
    return {
      x: { min: 0, max: xMax + xPadding },
      y: { min: 0, max: yMax + yPadding }
    };
  },

  // Format number with units
  formatValue: (value, metric) => {
    if (value === undefined || value === null) return 'N/A';
    
    const metricInfo = performanceData.metrics[metric];
    if (!metricInfo) return value;
    
    if (metricInfo.unit === 'ms') {
      return `${value.toLocaleString()}ms`;
    }
    if (metricInfo.unit === 'kB') {
      return `${value.toFixed(1)}kB`;
    }
    if (metricInfo.unit === 'score') {
      return `${(value * 100).toFixed(1)}%`;
    }
    
    return value.toString();
  }
};

// Export data for global access
window.performanceData = performanceData;
window.dataUtils = dataUtils; 