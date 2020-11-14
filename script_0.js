// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawVisualization);

// function drawVisualization() {
// // Some raw data (not necessarily accurate)
// var data = google.visualization.arrayToDataTable([
// ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
// ['2004/05', 165, 938, 522, 998, 450, 614.6],
// ['2005/06', 135, 1120, 599, 1268, 288, 682],
// ['2006/07', 157, 1167, 587, 807, 397, 623],
// ['2007/08', 139, 1110, 615, 968, 215, 609.4],
// ['2008/09', 136, 691, 629, 1026, 366, 569.6]
// ]);

// var options = {
// title : 'Monthly Coffee Production by Country',
// vAxis: {title: 'Cups'},
// hAxis: {title: 'Month'},
// seriesType: 'bars',
// series: {5: {type: 'line'}}
// };

// var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
// chart.draw(data, options);
// }

window.onload = function () {
    drawVisualizationBarChart(); //id="BarChart"
    // drawVisualizationStackLineChart(); //id="StackLineChart"
    drawVisualizationBarLineChart1();  //id="BarLineChar1"
    drawVisualizationBarLineChart2();  //id="BarLineChar2"
    // drawVisualizationBrushBarChart();  //id="BrushChart"
    // drawVisualizationPieChart(); //id="PieChart"
    // drawVisualizationDonutChart();  //id="DonutChart"
    // drawVisualizationHalfDonutChart_1();  //id="HalfDonutChart_1" class="js-pie-chart pie-chart" 
    // drawVisualizationHalfDonutChart_2();  //id="HalfDonutChart_2" class="js-pie-chart pie-chart" 
    // BarHorizontalChart();  //id="BarHorizontalChart"
    // drawVisualizationTreeMap();  //id="TreeMap"
    drawVisualizationPieChartSalaryExpectation();  //id="PieChartSalaryExpectation"
}

function drawVisualizationBarChart() {
    var dom = document.getElementById("BarChart");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
    };


    var labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    };

    option = {
        title: {
            // text: 'Unemployment rate and corrosponding participation rate in 20-24 age group',
            subtext: 'Unemployment rate and corrosponding participation rate in 20-24 age group',
            left: 'center'
        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Labor force', 'Labor force participation rate']
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['2019', '2020 (Jan-Sep)']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Labor force (Unit: thousand)',
                min: 0,
                max: 250,
                // interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'Participation rate (%)',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series: [
            {
                name: 'Labor force',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                data: [243.8, 214.2]
            },
            {
                name: 'Labor force participation rate',
                type: 'bar',
                yAxisIndex: 1,
                label: labelOption,
                data: [59.41, 56.08]
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawVisualizationStackLineChart() {
    var dom = document.getElementById("StackLineChart");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        // title: {
        //     text: 'StackLineChart'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            data: ['Labour force (Unit: 10,000)', 'Unemployed (Unit: 1,000)', 'Underemployed (Unit: 1,000)']
        },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Labour force (Unit: 10,000)',
                type: 'line',
                stack: 'Total amount',
                data: [377.761, 385.185, 386.646, 390.087, 391.531, 394.038, 397.587, 396.745, 387.229],
                smooth: true
            },
            {
                name: 'Unemployed (Unit: 1,000)',
                type: 'line',
                stack: 'Total amount',
                data: [126.32, 131.91, 127.96, 130.56, 134.77, 125.06, 113.24, 118.3, 226.63],
                smooth: true
            },
            {
                name: 'Underemployed (Unit: 1,000)',
                type: 'line',
                stack: 'Total amount',
                data: [57.27, 58.77, 57.46, 53.51, 55.12, 45.84, 43.62, 42.01, 130.53],
                smooth: true
            }
        ]
    };


    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawVisualizationPieChart() {
    var dom = document.getElementById("PieChart");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: 'Vancancy - multiindustry',
                type: 'pie',
                radius: '55%',
                roseType: 'angle',
                data: [
                    { value: 0.133353133, name: 'Manufacturing' },
                    { value: 0.219186219, name: 'Construction' },
                    { value: 0.098010098, name: 'Import/export trade and wholesale' },
                    { value: 0.209385209, name: 'Retail, accommodation and food services' },
                    { value: 0.11048411, name: 'Transportation, storage, postal and courier services, information and communications' },
                    { value: 0.077517078, name: 'Financing, insurance, real estate, professional and business services' },
                    { value: 0.062073062, name: 'Public administration, social and personal services' },
                    { value: 0.08999109, name: 'Other industries' }
                ]
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawVisualizationBarLineChart1() {
    var dom = document.getElementById("BarLineChart1");
    var myChart = echarts.init(dom);
    var app = {};
    var data1 = [1.6, 1.2, 1.5, 1.4, 1.6, 1.8, 1.9, 1.8, 1.7, 2.5];
    var data1_transfered = [];
    var data2 = [3.1, 2.7, 3.1, 3.3, 3.4, 3.6, 4.8, 4.7, 4.2, 4.1];
    var data2_transfered = [];
    option = null;

    for (var i = 0; i < data1.length; i++) {
        var origin_1 = data1[i];
        var origin_2 = data2[i];
        data1_transfered.push(origin_1);
        data2_transfered.push(origin_2);
    }


    option = {
        tooltip: {
            // trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['Unemployment rate', 'Underemployment rate']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Unemployment rate (%)',
                // min: 0,
                max: 3.0,
                // interval: 10,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'Underemployment rate (%)',
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'Unemployment rate',
                type: 'bar',
                color: '#009999',
                data: data1_transfered
            },
            {
                name: 'Unemployment rate',
                type: 'line',
                color: '#009999',
                data: data1_transfered,
                smooth: true
            },
            {
                name: 'Underemployment rate',
                yAxisIndex: 1,
                type: 'bar',
                color: '#808080',
                data: data2_transfered
            },
            {
                name: 'Underemployment rate',
                yAxisIndex: 1,
                type: 'line',
                color: '#808080',
                data: data2_transfered,
                smooth: true
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

function drawVisualizationBarLineChart2() {
    var dom = document.getElementById("BarLineChart2");
    var myChart = echarts.init(dom);
    var app = {};
    var data1 = [172, 185, 190, 199, 210, 223, 228, 239, 256, 270];
    var data1_transfered = [];
    option = null;

    for (var i = 0; i < data1.length; i++) {
        var origin_1 = data1[i];
        data1_transfered.push(origin_1);
    }


    option = {
        tooltip: {
            // trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['Graduate income']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Graduate income (Unit: HK$\'000)',
                // min: 0,
                // max: 35,
                // interval: 10,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'Graduate income',
                type: 'bar',
                color: '#009999',
                data: data1_transfered
            },
            {
                name: 'Graduate income',
                type: 'line',
                color: '#009999',
                data: data1_transfered,
                smooth: true
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawVisualizationBrushBarChart() {
    var dom = document.getElementById("BrushChart");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var xAxisData = ['03/2018', '06/2018', '09/2018', '12/2018', '03/2019', '06/2019', '09/2019', '12/2019', '03/2020', '06/2020'];
    // var data1 = [];
    // var data2 = [];
    // var data3 = [];
    // var data4 = [];

    // for (var i = 0; i < 10; i++) {
    //     xAxisData.push('Class' + i);
    //     data1.push((Math.random() * 2).toFixed(2));
    //     data2.push(-Math.random().toFixed(2));
    //     data3.push((Math.random() * 5).toFixed(2));
    //     data4.push((Math.random() + 0.3).toFixed(2));
    // }

    var emphasisStyle = {
        itemStyle: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };

    option = {
        // title: {
        //     text: 'Percentage change (%)',
        //     subtext: 'Number of vacancies (other than those in the civil service) analysed by industry section',
        //     left: 'center'
        // },
        backgroundColor: '#eee',
        legend: {
            data: ['Construction sites (manual workers only)', 'Import/export trade and wholesale', 'Retail', 'Accommodation and food services', 'Information and communications', 'Financing and insurance', 'Real estate', 'Social and personal services'],
            left: 10
        },
        // brush: {
        //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        //     xAxisIndex: 0
        // },
        // toolbox: {
        //     feature: {
        //         magicType: {
        //             type: ['stack', 'tiled']
        //         },
        //         dataView: {}
        //     }
        // },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            name: 'X Axis',
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
        },
        yAxis: {
            inverse: false,
            splitArea: { show: false }

        },
        grid: {
            left: 100
        },
        visualMap: {
            type: 'continuous',
            dimension: 1,
            text: ['High', 'Low'],
            inverse: true,
            itemHeight: 200,
            calculable: true,
            min: -7,
            max: 3,
            top: 60,
            left: 10,
            inRange: {
                colorLightness: [0.4, 0.8]
            },
            outOfRange: {
                color: '#bbb'
            },
            controller: {
                inRange: {
                    color: '#2f4554'
                }
            }
        },
        series: [
            {
                name: 'Construction sites (manual workers only)',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: [-2.2, -1.3, -5.9, -5.1, 4.3, -4.4, -5.7, 1.9, -1.2, -1.5]
            },
            {
                name: 'Import/export trade and wholesale',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: [0.05, -0.1, -0.3, -0.3, -2.8, -1.5, -2, -1.2, -4, -5.3]
            },
            {
                name: 'Retail',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: [0.6, 0.4, 0.4, 0.4, -0.5, -0.5, -1.6, -2.2, -2.4, -2.2]
            },
            {
                name: 'Accommodation and food services',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: [1.4, 1.3, 0.8, 0.2, 0.4, -0.3, -4.2, -1.5, -5.5, -4.1]
            },
            {
                name: 'Information and communications',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: [-0.2, 1.2, 0.8, 0.8, 0.6, 0.3, -0.5, -0.1, -0.5, 0.9]
            },
            {
                name: 'Financing and insurance',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: [0.8, 0.05, 1, 1, 1.1, 0.4, 0.2, 0.5, -0.1, 0.2]
            },
            {
                name: 'Real estate',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: [0.5, 0.4, 0.7, 0.8, 0.4, -0.1, -0.1, -0.1, -0.4, 0.6]
            },
            {
                name: 'Social and personal services',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: [0.4, 0.7, 0.5, 0.5, 0.5, 0.8, 0.7, 0.3, -1.2, 0.1]
            }
        ]
    };

    myChart.on('brushSelected', renderBrushed);

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

};

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart.setOption({
        title: {
            backgroundColor: '#333',
            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
            bottom: 0,
            right: 0,
            width: 100,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    });
};

function drawVisualizationDonutChart() {
    var dom = document.getElementById("DonutChart");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = {
        title: {
            text: 'Only 52.4% have found a full-time job after graduation',
            // subtext: 'Only 52.4% have found a full-time job after graduation',
            // fontSize: '40',
            left: 'center'
        },
        tooltip: {
            name: 'abc',
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['Yes', 'No', 'Maybe']
        },
        series: [
            {
                name: 'Have you got employed as a full-time employer?',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    fontSize: '15',
                    // position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 52.4, name: 'Yes' },
                    { value: 44, name: 'No' },
                    { value: 3.6, name: 'Maybe' },
                ]
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

function drawVisualizationHalfDonutChart_1() {

    var datasPie = [
        { "label": "Yes", "number": "49.3", "color": "#00CCCC" },
        { "label": "No", "number": "26.7", "color": "#7F00FF" },
        { "label": "Maybe", "number": "24", "color": "#FF99FF" }
    ];

    drawPie(datasPie);

    function drawPie(data) {
        /* ------------ initialization/calculation ------------- */
        /* ----------------------------------------------------- */
        var $container = $('.js-pie-chart'),
            width = $container.width(),
            height = width / 2,
            r = width / 2,
            ir = r / 2,
            pi = Math.PI;

        //pie structure
        var pie = d3.layout.pie();
        pie.padAngle(.02)
            .sort(null)
            .value(function (d) {
                return d.number;
            })
            .startAngle(-90 * (pi / 180))
            .endAngle(90 * (pi / 180));

        //tooltip div, content dynamically changed
        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, -10])
            .html(function (d) {
                return '<p class="d3-tip__label">' + d.data.label + '</p><p>' + d.data.number + '</p>';
            });

        var arc = d3.svg.arc().outerRadius(r - 10).innerRadius(ir - 5),
            arcHover = d3.svg.arc().outerRadius(r).innerRadius(ir);

        /* ------------------ drawing ------------------------- */
        /* ----------------------------------------------------- */
        //draw svg element
        var object = d3.select('#HalfDonutChart_1').append('object')
            .attr('width', '100%')
            .attr('height', 'auto')
            .style('display', 'block')
            .style('position', 'relative')
            .style('padding-top', height + 'px');

        var vis = object.append('svg')
            .data([data])
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio', 'xMinYMin')
            .style('position', 'absolute')
            .style('top', '0')
            .style('left', '0')
            .append('g')
            .attr('transform', 'translate(' + r + ',' + r + ')');

        //init tooltips
        vis.call(tip);

        //draw slices
        var arcs = vis.selectAll('g.slice')
            .data(pie)
            .enter()
            .append('g')
            .attr('class', 'slice');

        arcs.on('mouseover', function (d) {
            tip.show(d);
            $('.d3-tip').addClass('is-active');
        })
            .on('mouseout', function (d) {
                tip.hide(d);
                $('.d3-tip').removeClass('is-active');
            });

        //draw arcs
        arcs
            .append('path')
            .attr('fill', '#990000')
            .attr('d', arc)
            .on('mouseover', function (d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr('fill', data[i].color)
                    .attr('d', arcHover);
            })
            .on('mouseout', function (d) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr('fill', '#990000')
                    .attr('d', arc);
            });
    }
}

function drawVisualizationHalfDonutChart_2() {
    var datasPie = [
        { "label": "Yes", "number": "83.5", "color": "#8BC34A" },
        { "label": "No", "number": "2.5", "color": "#CDDC39" },
        { "label": "Maybe", "number": "14", "color": "#FFEB3B" }
    ];

    drawPie(datasPie);

    function drawPie(data) {
        /* ------------ initialization/calculation ------------- */
        /* ----------------------------------------------------- */
        var $container = $('.js-pie-chart'),
            width = $container.width(),
            height = width / 2,
            r = width / 2,
            ir = r / 2,
            pi = Math.PI;

        //pie structure
        var pie = d3.layout.pie();
        pie.padAngle(.02)
            .sort(null)
            .value(function (d) {
                return d.number;
            })
            .startAngle(-90 * (pi / 180))
            .endAngle(90 * (pi / 180));

        //tooltip div, content dynamically changed
        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, -10])
            .html(function (d) {
                return '<p class="d3-tip__label">' + d.data.label + '</p><p>' + d.data.number + '</p>';
            });

        var arc = d3.svg.arc().outerRadius(r - 10).innerRadius(ir - 5),
            arcHover = d3.svg.arc().outerRadius(r).innerRadius(ir);

        /* ------------------ drawing ------------------------- */
        /* ----------------------------------------------------- */
        //draw svg element
        var object = d3.select('#HalfDonutChart_2').append('object')
            .attr('width', '100%')
            .attr('height', 'auto')
            .style('display', 'block')
            .style('position', 'relative')
            .style('padding-top', height + 'px');

        var vis = object.append('svg')
            .data([data])
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio', 'xMinYMin')
            .style('position', 'absolute')
            .style('top', '0')
            .style('left', '0')
            .append('g')
            .attr('transform', 'translate(' + r + ',' + r + ')');

        //init tooltips
        vis.call(tip);

        //draw slices
        var arcs = vis.selectAll('g.slice')
            .data(pie)
            .enter()
            .append('g')
            .attr('class', 'slice');

        arcs.on('mouseover', function (d) {
            tip.show(d);
            $('.d3-tip').addClass('is-active');
        })
            .on('mouseout', function (d) {
                tip.hide(d);
                $('.d3-tip').removeClass('is-active');
            });

        //draw arcs
        arcs
            .append('path')
            .attr('fill', '#00796B')
            .attr('d', arc)
            .on('mouseover', function (d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr('fill', data[i].color)
                    .attr('d', arcHover);
            })
            .on('mouseout', function (d) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr('fill', '#00796B')
                    .attr('d', arc);
            });
    }
}

function BarHorizontalChart() {

    var dom = document.getElementById("BarHorizontalChart");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = {
        title: {
            // text: 'Q: Do you think the pandemic has lowered your requirements in term of salary?',
            subtext: 'Q: Why do you think it is more difficult for fresh graduates to get a job during the pandemic (multiple choices)?',
            left: 'center'
        },
        tooltip: {
            // trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: [
            {},
            {
                type: 'category',
                inverse: true,
                data: ['Competition grows (88.3%)', 'More difficult for foreign job application (35.1%)', 'Companies struggling to meet salary requirement (26%)', 'Others (7.8%)']
            }
        ],
        series: [{
            data: [88.3, 35.1, 26, 7.8],
            yAxisIndex: 1,
            type: 'bar'
        }]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawVisualizationTreeMap() {
    var dom = document.getElementById("TreeMap");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = {
        series: [{
            name: 'Question: Do you think you should get higher pay without the pandemic?',
            type: 'treemap',
            data: [
                {
                    name: 'Decision',            // Second tree
                    value: 45.7,
                    children: [
                        {
                            name: '(Yes): The salary of the previous graduates are higher',  // Granson of first tree
                            value: 45.2
                        },
                        {
                            name: '(Yes): Companies cut staff salaries',  // Granson of first tree
                            value: 71

                        },
                        {
                            name: '(Yes): Reduce recruitment',  // Granson of first tree
                            value: 25.8

                        },
                        {
                            name: '(Yes): Other',  // Granson of first tree
                            value: 3.2

                        }

                    ]
                },
                {
                    name: 'Decision',            // First tree
                    value: 54.3,
                    children: [{
                        name: '(Maybe 42.9%)',       // First leaf of first tree
                        value: 42.9
                    }, {
                        name: '(No 11.4%)',       // Second leaf of first tree
                        value: 11.4
                    }]
                }
            ]
        }]
    };


    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawVisualizationPieChartSalaryExpectation() {
    var dom = document.getElementById("PieChartSalaryExpectation");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = {
        title: {
            // text: 'Questions',
            subtext: 'Two questions ask about the current employment challenges in pandemic',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['Q1', 'Q2']
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: {show: true},
        //         dataView: {show: true, readOnly: false},
        //         magicType: {
        //             show: true,
        //             type: ['pie', 'funnel']
        //         },
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        series: [
            {
                name: 'Do you think the job searching period has lengthened due to the corona outbreak?',
                type: 'pie',
                radius: [20, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    show: true
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {value: 49.3, name: 'Yes(Q1)'},
                    {value: 26.7, name: 'No(Q1)'},
                    {value: 24, name: 'Maybe(Q1)'}
                ]
            },
            {
                name: 'Do you think it is more difficult for fresh graduates to get a job during the pandemic?',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                    {value: 83.5, name: 'Yes(Q2)'},
                    {value: 2.5, name: 'No(Q2)'},
                    {value: 14, name: 'Maybe(Q2)'},
                ]
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

/***/




