var myChart = echarts.init(document.getElementById('main'));
  var option = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: "#383838",
        }
      }
    },
    yAxis: {
      splitLine: {
        lineStyle:{
          color: "#848484",
          width: 0.5
        }
      }
    },
    series: [
      {
        name: '',
        type: 'line',
        data: [850, 930, 900, 930, 1250, 1300, 1280],
        lineStyle: {color: '#e43631'},
        itemStyle: {color: '#e43631',},
      }
    ],
    backgroundColor: "rgb(220,219,219)"
  };
myChart.setOption(option);

window.addEventListener('resize', function(){
  myChart.resize()
})