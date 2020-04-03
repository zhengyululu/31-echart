    
$(function(){
    var myChart = echarts.init(document.getElementById('main'));
  
    var xData = [],
        yData = [];
    
    for(var p =0 ;p<=1;p+=0.01){
      xData.push(p);
      if(p === 0){
        yData.push(0);
      }else if(p === 1){
        yData.push(0);
      }else{
        yData.push(-1*p*Math.log2(p)-(1-p)*Math.log2(1-p) );
      }
    }
  
    var option = {
      title: {
        text: '二进熵函数曲线'
      },
      tooltip: {},
      legend: {
        data:['信息量']
      },
      xAxis: {
        data:xData
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        smooth:false,
        data: yData
      }]
    };
    myChart.setOption(option);
  }) 