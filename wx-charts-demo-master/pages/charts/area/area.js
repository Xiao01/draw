var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var areaChart = null;
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(areaChart.getCurrentDataIndex(e));
        areaChart.showToolTip(e);
    },   
  updateData: function () {
    console.log('update')
    const data_ = [3, 6, 8, 9, 12]
    console.log(data_)
    areaChart.updateData({
      categories: ['7', '8', '9', '10', '11', '12'],
      series: [{
        name: '成交量2',
        data: [3, 5, 12, 8, 9, 17],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
    });
  }, 
    onLoad: function (e) {
        var windowWidth = 320;
        try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          console.error('getSystemInfoSync failed!');
        }
        
        areaChart = new wxCharts({
            canvasId: 'areaCanvas',
            type: 'area',
            categories: ['1', '2', '3', '4', '5', '6'],
            animation: true,
            series: [{
                name: '成交量1',
                data: [32, 45, null, 56, 33, 34],
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
            }],
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0,
                fontColor: '#8085e9',
                gridColor: '#8085e9',
                titleFontColor: '#f7a35c'
            },
            xAxis: {
                fontColor: '#7cb5ec',
                gridColor: '#7cb5ec'
            },
            extra: {
                legendTextColor: '#cb2431'
            },
            width: windowWidth,
            height: 200
        });
    }
});