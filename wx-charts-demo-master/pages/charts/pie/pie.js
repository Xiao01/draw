var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
  data: {},
  touchHandler: function(e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },

  updateData: function() {
    console.log('update')
    const data_ = [3,6,8,9,12]
    console.log(data_)
    pieChart.updateData({
      series: [{
        name: '成交量1',
        data: data_[0],
      }, {
        name: '成交量2',
          data: data_[1],
      }, {
        name: '成交量3',
          data: data_[2],
      }, {
        name: '成交量4',
          data: data_[3],
      }, {
        name: '成交量5',
          data: data_[4],
      }],
    });
  },
  onReady: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '成交量1',
        data: 5,
      }, {
        name: '成交量2',
        data: 10,
      }, {
        name: '成交量3',
        data: 15,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  }
});