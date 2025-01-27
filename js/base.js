//
$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$(document).ready(function() {
    Highcharts.setOptions({
        colors: ['#8129dd', '#8ec63f','#2756ca','#f1b601','#f86423','#27aae3']
    });
    var chart1 = $("#container1").highcharts({
        chart: {
            renderTo: 'container1', //装载图表的div容器id
            type: 'bar',
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title: false,//主标题
        subtitle: false,//副标题
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        xAxis: {
            categories: ['12-24岁', '25-34岁', '35-44岁', '45-54岁', '55-64岁', '65-74岁', '75岁以上'],
            labels: {
                style: {
                    color: '#9ea0ae'
                }
            },
            tickWidth:'0',
            tickColor:'#1c2a38',
            lineColor: '#1c2a38',
        }, // x系列设置
        yAxis: {
            // min: 0,
            title: {
                text: '排行榜（人）',
                align: 'high'
            },
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            labels: {
                overflow: 'justify'
            }
        },// y系列设置
        tooltip: {
            valueSuffix: ' 人'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    color:'#fff',
                },
                borderColor: "",//去边框
                color:'#0084fe'
            }
        },
        legend:false,
        credits: {
            enabled: false
        },
        series: [{
            name: '人数',
            data: [230, 330, 320, 332, 301, 250, 200],
            color:'#0084fe',
            border:'#0084fe'
        }]
    });

    var chart2 = $("#container2").highcharts({
        chart: {
            renderTo: 'container2', //装载图表的div容器id
            type: 'bar',
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title: false,//主标题
        subtitle: false,//副标题
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        xAxis: {
            categories: ['18-24岁', '25-34岁', '35-44岁', '45-54岁', '55-64岁', '65-74岁', '75岁以上'],
            labels: {
                style: {
                    color: '#9ea0ae'
                }
            },
            tickWidth:'0',
            tickColor:'#1c2a38',
            lineColor: '#1c2a38',
        }, // x系列设置
        yAxis: {
            // min: 0,
            title: {
                text: '排行榜（人）',
                align: 'high'
            },
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            labels: {
                overflow: 'justify'
            }
        },// y系列设置
        tooltip: {
            valueSuffix: ' 人'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    color:'#fff',
                },
                borderColor: "",//去边框
                color:'#0084fe'
            }
        },
        legend:false,
        credits: {
            enabled: false
        },
        series: [{
            name: '人数',
            data: [230, 330, 320, 332, 301, 250, 200],
            color:'#0084fe',
            border:'#0084fe'
        }]
    });

    var chart3 = $("#jglxchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            type: 'column',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title:false,
        xAxis: {
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            lineColor: '#1c2a38',//轴线
            categories: ['日本', '德国', '印度', '美国', '英国','中国']
        },
        yAxis: {
            min: 0,
            title:false,
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
                }//柱形图上方数据显示
            }
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {           //不显示阴影
                stacking: 'normal',
                bar: false,
                borderWidth: 0,  //柱子边框的大小
            },
        },
        series: [{
            name: '高端',
            data: [150000, 83333, 181818, 700000, 50000,362857]
        }, {
            name: '中端',
            data: [60000, 55555, 136363, 200000, 25000,635000]
        }, {
            name: '低端',
            data: [90000, 111111, 181818, 200000, 125000,272142]
        }]
    });

    var chart4 = $("#qst-monthchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1
        },
        title: {
            text: false,
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            lineColor: '#1c2a38',
        },
        yAxis: {
            title: false,
            gridLineColor: '#1c2a38',
            tickColor:'#1c2a38'
        },
        tooltip: {
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        series: [{
            name: 'Lazada',
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 16, 12]
        }, {
            name: '速卖通',
            data: [3, 5, 7, 9, 11, 13, 15,17, 19, 18, 17, 16]
        }, {
            name: '虾皮',
            data: [3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '亚马逊',
            data: [10, 14,18, 22, 30, 28, 26, 24, 22, 21, 20, 19]
        },{
            name: 'eBay',
            data: [6, 8, 10, 13, 15,16, 18, 19, 18, 17, 16, 15]
        },{
            name: '公司官网',
            data: [8, 10, 12, 14, 16, 18, 16,14,13, 12,11, 10],
        }]
    });


    var chart5 = $("#qst-daychart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1
        },
        title: {
            text: false,
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            lineColor: '#1c2a38',
        },
        yAxis: {
            title: false,
            gridLineColor: '#1c2a38',
            tickColor:'#1c2a38'
        },
        tooltip: {
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        series: [{
            name: '全球财经',
            data: [34, 3, 32, 7, 5, 22, 13, 15, 17, 19, 16, 12]
        }, {
            name: '宏观经济',
            data: [3, 5, 7, 3, 11, 13, 5,17, 0, 8, 7, 6]
        }, {
            name: '货币市场',
            data: [3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '外汇市场',
            data: [10, 14,18, 22, 30, 28, 26, 24, 22, 21, 20, 19]
        },{
            name: '债券市场',
            data: [6, 8, 10, 13, 15,16, 18, 19, 18, 17, 16, 15]
        },{
            name: '大宗商品',
            data: [8, 10, 12, 14, 16, 18, 16,14,13, 12,11, 10],
        }]
    });

    var chart6 = $("#rj-daychart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [20, 0 , 20, 0]
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}条</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        plotOptions: {
            pie: {
                borderWidth: 0,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    color:'#fff',
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '80%',
            name: '占比',
            data: [
                {name:'男性',   y: 45.0},
                {
                    name: '女性',
                    y: 12.8,
                    sliced: true,
                    selected: true,
                }
            ]
        }]
    });

    var chart7 = $("#rj-monthchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [20, 0 , 20, 0]
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        plotOptions: {
            pie: {
                borderWidth: 0,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    color:'#fff',
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '80%',
            name: '占比',
            data: [
                {name:'男性',   y: 70.0},
                {
                    name: '女性',
                    y: 30.0,
                    sliced: true,
                    selected: true,
                }
            ]
        }]
    });

    var chart8 = $("#fbt-monthchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: false,
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FFF'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '场合占比',
            data: [
                {
                    name: '教育',
                    y: 10,
                    sliced: true,
                    selected: true
                },
                ['家庭聚会拍摄',   15.0],
                ['个人旅行记录',       20.0],
                ['城市风光航拍',   10.0],
                ['社交',   5.0],
                ['自然航拍',   40.0],
            ]
        }]
    });

    var chart9 = $("#fbt-daychart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: false,
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FFF'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '发稿量占比',
            data: [
                {
                    name: '教育',
                    y: 2,
                    sliced: true,
                    selected: true
                },
                ['家庭聚会拍摄',   30],
                ['个人旅行记录',       4.0],
                ['城市风光航拍',   24.0],
                ['社交',   5.0],
                ['自然航拍',   5.0],
            ]
        }]
    });

    var chart10 = $("#zxlxchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            type: 'column',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title:false,
        xAxis: {
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            lineColor: '#1c2a38',//轴线
            categories: ['价格', '品牌', '性能', '便携性', '安全性','售后服务']
        },
        yAxis: {
            min: 0,
            title:false,
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
                }//柱形图上方数据显示
            }
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {           //不显示阴影
                stacking: 'normal',
                bar: false,
                borderWidth: 0,  //柱子边框的大小
            },
        },
        series: [{
            name: '高端',
            data: [20, 30,25, 10, 10,5]
        }, {
            name: '中端',
            data: [30% 25, 20, 10, 8,7]
        }, {
            name: '低端',
            data: [40, 20, 15, 10, 10,5]
        }]
    });





});