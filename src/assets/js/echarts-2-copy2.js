const echarts = require('echarts/lib/echarts')

const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
const option = {
  backgroundColor: '#fff',
  // 标题
  title: {
    text: '网络抖动',
    textStyle: {
      fontSize: 12,
      fontWeight: 400
    },
    left: 'center',
    top: '5%'
  },
  // 图例
  legend: {
    icon: 'circle',
    top: '5%',
    right: '5%',
    itemWidth: 6,
    itemGap: 20,
    textStyle: {
      color: '#556677'
    }
  },
  // 提示框组件
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      label: {
        show: true,
        backgroundColor: '#fff',
        color: '#556677',
        borderColor: 'rgba(0,0,0,0)',
        shadowColor: 'rgba(0,0,0,0)',
        shadowOffsetY: 0
      },
      lineStyle: {
        width: 0
      }
    },
    backgroundColor: '#fff',
    textStyle: {
      color: '#5c6c7c'
    },
    padding: [10, 10],
    extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
  },
  // 用来做整个表的布局
  grid: {
    top: '15%'
  },
  // 坐标轴
  xAxis: [{
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    axisLine: {
      lineStyle: {
        color: '#DCE2E8'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0,
      textStyle: {
        color: '#556677'
      },
      // 默认x轴字体大小
      fontSize: 12,
      // margin:文字到x轴的距离
      margin: 15
    },
    axisPointer: {
      label: {
        // padding: [11, 5, 7],
        padding: [0, 0, 10, 0],
        /*
除了padding[0]建议必须是0之外，其他三项可随意设置

和CSSpadding相同，[上，右，下，左]

如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

padding[2]的10:

10 = 文字距下边线的距离 + 下边线的宽度

如：UI图中文字距下边线距离为7 下边线宽度为2

则padding: [0, 0, 9, 0]

        */
        // 这里的margin和axisLabel的margin要一致!
        margin: 15,
        // 移入时的字体大小
        fontSize: 12,
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#fff' // 0% 处的颜色
          }, {
            // offset: 0.9,
            offset: 0.86,
            /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

            */
            color: '#fff' // 0% 处的颜色
          }, {
            offset: 0.86,
            color: '#33c0cd' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#33c0cd' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    },
    boundaryGap: false
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#DCE2E8'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#556677'
      }
    },
    splitLine: {
      show: false
    }
  }, {
    type: 'value',
    position: 'right',
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#556677'
      },
      formatter: '{value}'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#DCE2E8'
      }
    },
    splitLine: {
      show: false
    }
  }],
  // 系列列表。在echart中，提出了一个新的概念叫做系列来代表一种类型图
  series: [
    {
      name: 'To 发送端',
      type: 'line',
      data: [9, 8, 12, 15, 20, 3, 8, 9, 7],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: '#ff9a87'
        },
        {
          offset: 1,
          color: '#ffc487'
        }
        ]),
        shadowColor: 'rgba(158,135,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0]
        }
      }
    },
    {
      name: 'To 接受端',
      type: 'line',
      data: [13, 5, 4, 6, 16, 15, 19, 18, 25],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
          offset: 0,
          color: '#a639dd'
        },
        {
          offset: 1,
          color: '#dd39da'
        }
        ]),
        shadowColor: 'rgba(115,221,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[1],
          borderColor: colorList[1]
        }
      }
    }
  ]
}

export default option
