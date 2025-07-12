// Global chart instances
let paretoChart;

let currentTestCase = 'react-1k';
let hiddenTools = new Set(); // Track hidden tools in the chart

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    initializeEventListeners();
    initializeTabs();
    updateResultsTable();
});

// Initialize all charts
function initializeCharts() {
    initializeParetoChart();
    Chart.defaults.color = '#ffffff';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
    Chart.defaults.backgroundColor = 'rgba(255, 255, 255, 0.05)';
}

// Initialize Pareto frontier chart
function initializeParetoChart() {
    const ctx = document.getElementById('paretoChart').getContext('2d');
    const xAxis = document.getElementById('paretoXAxis').value;
    const yAxis = document.getElementById('paretoYAxis').value;
    const normalized = document.getElementById('normalizedScores').checked;

    // Update axis configuration
    const xMetric = performanceData.metrics[xAxis];
    const yMetric = performanceData.metrics[yAxis];

    // Check if we're dealing with score-based metrics
    const isScoreBased = normalized || (xMetric.unit === 'score' && yMetric.unit === 'score');

    let axisRanges;
    if (isScoreBased) {
        // For score-based metrics, set fixed range 0-1 with padding
        axisRanges = {
            x: { min: -0.05, max: 1.05 },  // 5% padding on each side
            y: { min: -0.05 }
        };
    } else {
        axisRanges = dataUtils.getAxisRanges(xAxis, yAxis, normalized);
    }

    paretoChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: dataUtils.getParetoData(xAxis, yAxis, normalized)
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    beginAtZero: !isScoreBased,
                    min: axisRanges.x.min,
                    max: axisRanges.x.max,
                    title: {
                        display: true,
                        text: isScoreBased ? `${xMetric.name.replace(' Score', '')} Score (higher is better)` : `${xMetric.name} (${xMetric.unit})`,
                        color: '#ffffff',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: '#ffffff',
                        callback: function(value) {
                            if (isScoreBased) {
                                return `${(value * 100).toFixed(0)}%`;
                            }
                            return formatChartValue(value, xAxis);
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    type: 'linear',
                    beginAtZero: !isScoreBased,
                    min: axisRanges.y.min,
                    max: axisRanges.y.max,
                    title: {
                        display: true,
                        text: isScoreBased ? `${yMetric.name.replace(' Score', '')} Score (higher is better)` : `${yMetric.name} (${yMetric.unit})`,
                        color: '#ffffff',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: '#ffffff',
                        callback: function(value) {
                            if (isScoreBased) {
                                return `${(value * 100).toFixed(0)}%`;
                            }
                            return formatChartValue(value, yAxis);
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Performance Trade-offs',
                    color: '#ffffff',
                    font: {
                        size: 20,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        color: '#ffffff',
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 12
                        }
                    },
                    onClick: (event, legendItem, legend) => {
                        // Find the dataset that corresponds to this legend item
                        const datasetIndex = legendItem.datasetIndex;
                        const dataset = paretoChart.data.datasets[datasetIndex];
                        if (dataset?.toolKey) {
                            toggleToolVisibility(dataset.toolKey);
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    callbacks: {
                        title: function(context) {
                            const point = context[0];
                            const dataset = paretoChart.data.datasets[point.datasetIndex];
                            return dataset.label;
                        },
                        label: function(context) {
                            const point = context.raw;
                            const testCase = performanceData.testCases[point.testCase];
                            const normalized = document.getElementById('normalizedScores').checked;

                            if (normalized) {
                                // Show both score and original values for better understanding
                                return [
                                    `Case: ${testCase.name}`,
                                    `${performanceData.metrics[xAxis].name} Score: ${dataUtils.formatValue(point.x, `${xAxis}Score`)}`,
                                    `${performanceData.metrics[xAxis].name}: ${dataUtils.formatValue(point.originalX, xAxis)}`,
                                    `${performanceData.metrics[yAxis].name} Score: ${dataUtils.formatValue(point.y, `${yAxis}Score`)}`,
                                    `${performanceData.metrics[yAxis].name}: ${dataUtils.formatValue(point.originalY, yAxis)}`
                                ];
                            }

                            return [
                                `Case: ${testCase.name}`,
                                `${performanceData.metrics[xAxis].name}: ${dataUtils.formatValue(point.x, xAxis)}`,
                                `${performanceData.metrics[yAxis].name}: ${dataUtils.formatValue(point.y, yAxis)}`
                            ];
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'point'
            },
            onHover: (event, activeElements) => {
              if (event.type !== 'mousemove') {
                    console.log('Hover event:', event);
              }
                if (activeElements.length > 0) {
                    const dataset = paretoChart.data.datasets[activeElements[0].datasetIndex];
                    highlightToolInChart(dataset.toolKey);
                } else {
                    resetChartHighlight();
                }
            },
            onClick: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const dataset = paretoChart.data.datasets[activeElements[0].datasetIndex];
                    toggleToolVisibility(dataset.toolKey);
                } else {
                    clearChartSelection();
                }
            }
        },
        plugins: [{
          id: 'myEventCatcher',
          beforeEvent(chart, args, pluginOptions) {
            const event = args.event;
            if (event.type === 'mouseout') {
                resetChartHighlight();
            }
          }
        }]
    });
}



// Initialize event listeners
function initializeEventListeners() {
    // Pareto chart controls
    document.getElementById('paretoXAxis').addEventListener('change', updateParetoChart);
    document.getElementById('paretoYAxis').addEventListener('change', updateParetoChart);
    document.getElementById('normalizedScores').addEventListener('change', updateParetoChart);



    // Tab switching
    for (const button of document.querySelectorAll('.tab-button')) {
        button.addEventListener('click', () => {
            const testCase = button.dataset.case;
            switchTestCase(testCase);
        });
    }
}

// Initialize tabs
function initializeTabs() {
    switchTestCase('react-1k');
}

// Update Pareto chart when controls change
function updateParetoChart() {
    const xAxis = document.getElementById('paretoXAxis').value;
    const yAxis = document.getElementById('paretoYAxis').value;
    const normalized = document.getElementById('normalizedScores').checked;

    // Reset hidden tools when changing axes
    hiddenTools.clear();

    paretoChart.data.datasets = dataUtils.getParetoData(xAxis, yAxis, normalized);

    // Update axis configuration
    const xMetric = performanceData.metrics[xAxis];
    const yMetric = performanceData.metrics[yAxis];

    // Check if we're dealing with score-based metrics
    const isScoreBased = normalized || (xMetric.unit === 'score' && yMetric.unit === 'score');

    let axisRanges;
    if (isScoreBased) {
        // For score-based metrics, set fixed range 0-1 with padding
        axisRanges = {
            x: { min: -0.05, max: 1.05 },  // 5% padding on each side
            y: { min: -0.05, max: 1.05 }
        };
    } else {
        axisRanges = dataUtils.getAxisRanges(xAxis, yAxis, normalized);
    }

    // Update axis scale types and properties
    paretoChart.options.scales.x.type = 'linear';
    paretoChart.options.scales.x.beginAtZero = !isScoreBased;  // Don't begin at zero for score-based to show negative padding
    paretoChart.options.scales.x.min = axisRanges.x.min;
    paretoChart.options.scales.x.max = axisRanges.x.max;

    // Update Y-axis properties
    paretoChart.options.scales.y.type = 'linear';
    paretoChart.options.scales.y.beginAtZero = !isScoreBased;  // Don't begin at zero for score-based to show negative padding
    paretoChart.options.scales.y.min = axisRanges.y.min;
    paretoChart.options.scales.y.max = axisRanges.y.max;

    // Update axis labels and tick formatting
    if (isScoreBased) {
        paretoChart.options.scales.x.title.text = `${xMetric.name.replace(' Score', '')} Score (higher is better)`;
        paretoChart.options.scales.y.title.text = `${yMetric.name.replace(' Score', '')} Score (higher is better)`;
        // Format ticks as percentages for score-based charts
        paretoChart.options.scales.x.ticks.callback = function(value) {
            return `${(value * 100).toFixed(0)}%`;
        };
        paretoChart.options.scales.y.ticks.callback = function(value) {
            return `${(value * 100).toFixed(0)}%`;
        };
    } else {
        paretoChart.options.scales.x.title.text = `${xMetric.name} (${xMetric.unit})`;
        paretoChart.options.scales.y.title.text = `${yMetric.name} (${yMetric.unit})`;
        // Use original formatting for non-score charts
        paretoChart.options.scales.x.ticks.callback = function(value) {
            return formatChartValue(value, xAxis);
        };
        paretoChart.options.scales.y.ticks.callback = function(value) {
            return formatChartValue(value, yAxis);
        };
    }

    paretoChart.update();
}





// Switch test case
function switchTestCase(testCase) {
    currentTestCase = testCase;

    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    const selectedButton = document.querySelector(`.tab-button[data-case="${testCase}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    updateResultsTable();
}

// Update results table
function updateResultsTable() {
    const resultsContainer = document.getElementById('resultsTable');
    const tableData = dataUtils.getTableData(currentTestCase);

    if (!tableData) {
        resultsContainer.innerHTML = '<p>No data available for this test case.</p>';
        return;
    }

    const caseInfo = performanceData.testCases[currentTestCase];

    let html = `
        <div class="table-header">
            <h3>${caseInfo.name}</h3>
            <p>${caseInfo.description}</p>
        </div>
        <div class="table-container">
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Tool</th>
                        <th>Dev Cold Start</th>
                        <th>Root HMR</th>
                        <th>Leaf HMR</th>
                        <th>Prod Build</th>
                        <th>Total Size</th>
                        <th>Gzipped Size</th>
                        <th>Speed Score</th>
                        <th>Size Score</th>
                        <th>Gzipped Score</th>
                    </tr>
                </thead>
                <tbody>
    `;

    tableData.forEach(row => {
        html += `
            <tr class="table-row" data-tool="${row.toolKey}">
                <td class="tool-name">
                    <div class="tool-indicator" style="background-color: ${row.color}"></div>
                    ${row.tool}
                </td>
                <td>${dataUtils.formatValue(row.devColdStart, 'devColdStart')}</td>
                <td>${dataUtils.formatValue(row.rootHMR, 'rootHMR')}</td>
                <td>${dataUtils.formatValue(row.leafHMR, 'leafHMR')}</td>
                <td>${dataUtils.formatValue(row.prodBuild, 'prodBuild')}</td>
                <td>${dataUtils.formatValue(row.totalSize, 'totalSize')}</td>
                <td>${dataUtils.formatValue(row.gzippedSize, 'gzippedSize')}</td>
                <td>${dataUtils.formatValue(row.prodBuildScore, 'prodBuildScore')}</td>
                <td>${dataUtils.formatValue(row.totalSizeScore, 'totalSizeScore')}</td>
                <td>${dataUtils.formatValue(row.gzippedSizeScore, 'gzippedSizeScore')}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    resultsContainer.innerHTML = html;

    // Add table row click handlers
    document.querySelectorAll('.table-row').forEach(row => {
        row.addEventListener('click', () => {
            const toolKey = row.dataset.tool;
            selectTool(toolKey);
        });
    });
}

// Highlight tool in chart
function highlightToolInChart(toolKey) {
    if (!paretoChart) return;

    for (const dataset of paretoChart.data.datasets) {
        const isHidden = hiddenTools.has(dataset.toolKey);
        const isHighlighted = dataset.toolKey === toolKey;

        if (isHidden) {
            // Keep hidden tools hidden
            dataset.pointRadius = 0;
            dataset.pointHoverRadius = 0;
            dataset.backgroundColor = 'transparent';
            dataset.borderColor = 'transparent';
            dataset.borderWidth = 0;
            dataset.hidden = true;
        } else if (isHighlighted) {
            // Highlight the hovered tool
            dataset.pointRadius = 12;
            dataset.pointHoverRadius = 16;
            dataset.backgroundColor = performanceData.tools[dataset.toolKey].color;
            dataset.borderColor = performanceData.tools[dataset.toolKey].color;
            dataset.borderWidth = 4;
            dataset.hidden = false;
        } else {
            // Make other visible tools less prominent
            dataset.pointRadius = 6;
            dataset.pointHoverRadius = 10;
            dataset.backgroundColor = `${performanceData.tools[dataset.toolKey].color}60`;
            dataset.borderColor = `${performanceData.tools[dataset.toolKey].color}60`;
            dataset.borderWidth = 1;
            dataset.hidden = false;
        }
    }

    paretoChart.update('none');
}

// Reset chart highlight
function resetChartHighlight() {
    if (!paretoChart) return;

    // Reset all tools to their current visibility state without highlight
    updateChartVisibility();
}

// Toggle tool visibility in chart
function toggleToolVisibility(toolKey) {
    if (!paretoChart) return;

    // Check if all tools are currently visible
    const allToolsVisible = hiddenTools.size === 0;

    if (allToolsVisible) {
        // Hide all tools except the clicked one
        for (const dataset of paretoChart.data.datasets) {
            if (dataset.toolKey !== toolKey) {
                hiddenTools.add(dataset.toolKey);
            }
        }
    } else {
        // Toggle visibility of the clicked tool
        if (hiddenTools.has(toolKey)) {
            hiddenTools.delete(toolKey);
        } else {
            hiddenTools.add(toolKey);
        }

        // Check if all tools would be hidden after this toggle
        const totalTools = paretoChart.data.datasets.length;
        if (hiddenTools.size >= totalTools) {
            // Show all tools instead of hiding all
            hiddenTools.clear();
        }
    }

    // Update chart appearance
    updateChartVisibility();
}

// Update chart visibility based on hiddenTools set
function updateChartVisibility() {
    if (!paretoChart) return;

    for (const dataset of paretoChart.data.datasets) {
        const isHidden = hiddenTools.has(dataset.toolKey);

        if (isHidden) {
            // Hide the tool
            dataset.pointRadius = 0;
            dataset.pointHoverRadius = 0;
            dataset.backgroundColor = 'transparent';
            dataset.borderColor = 'transparent';
            dataset.borderWidth = 0;
            dataset.hidden = true;
        } else {
            // Show the tool with normal appearance
            dataset.pointRadius = 8;
            dataset.pointHoverRadius = 12;
            dataset.backgroundColor = performanceData.tools[dataset.toolKey].color;
            dataset.borderColor = performanceData.tools[dataset.toolKey].color;
            dataset.borderWidth = 2;
            dataset.hidden = false;
        }
    }

    paretoChart.update('none');
}

// Clear chart selection
function clearChartSelection() {
    if (!paretoChart) return;

    // Reset hidden tools
    hiddenTools.clear();

    // Reset all tools to normal appearance
    for (const dataset of paretoChart.data.datasets) {
        dataset.pointRadius = 8;
        dataset.pointHoverRadius = 12;
        dataset.backgroundColor = performanceData.tools[dataset.toolKey].color;
        dataset.borderColor = performanceData.tools[dataset.toolKey].color;
        dataset.borderWidth = 2;
        dataset.hidden = false;
    }

    paretoChart.update('none');
}

// Format chart values
function formatChartValue(value, metric) {
    if (metric.includes('Size')) {
        return `${(value / 1000).toFixed(1)}MB`;
    }
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}s`;
    }
    return `${value}ms`;
}

// Add smooth animations
function addFadeInAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.chart-section, .results-section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize fade-in animations
document.addEventListener('DOMContentLoaded', addFadeInAnimations);
