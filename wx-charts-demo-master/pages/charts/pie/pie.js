var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
  data: {},
  touchHandler: function(e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  createSimulationData: function() {
   
    var data = [];
    var name=[];
    for (var i = 0; i < 10; i++) {
      num = Math.random() * 100
      num = num.toFixed(1)
      data.push(num);
      name.push("成交量"+(i+1)+": "+data[i])
    }
    return {
      data: data,
      name:name
    }
  },
  updateData: function() {
    var simulationData = this.createSimulationData();
    var series =[]
    for (var i = 0; i < 10; i++){
     var  series_ ={ 
       name: simulationData.name[i],
       data: simulationData.data[i],
     }
      console.log("series_: " + series_)
      series.push(series_)
    }
   
    pieChart.updateData({
      series: series
    });
  },
  onLoad: function(e) {
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
      }, {
        name: '成交量4',
        data: 20,
      }, {
        name: '成交量2',
        data: 25,
      }, {
        name: '成交量3',
        data: 30,
      }, {
        name: '成交量4',
        data: 35,
      }, {
        name: '成交量2',
        data: 40,
      }, {
        name: '成交量3',
        data: 45,
      }, {
        name: '成交量3',
        data: 50,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  }
});