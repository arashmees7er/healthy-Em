<template>
  <div :id="id" style="min-height: 400px"/>
</template>

<script>
import echarts from 'echarts'
import { REPORT_COLORS } from '@/assets/js/constant'

export default {
  name: 'PieChart',
  props: ['data', 'xLabels', 'title'],
  data() {
    return {
      id: Math.random().toString(),
    }
  },
  mounted() {
    setTimeout(() => {
      this.render()
    }, 300)
  },
  methods: {
    render() {
      // based on prepared DOM, initialize echarts instance
      var myChart = echarts.init(document.getElementById(this.id))

      // specify chart configuration item and data
      var option = {
        title: {
          text: this.title,
          x: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          right: '20%',
          top: '100',
          data: _.map(this.data, 'name'),
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'download',
            },
          },
        },
        color: REPORT_COLORS,
        series: [
          {
            type: 'pie',
            radius: '75%',
            center: ['50%', '53%'],
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }

      // use configuration item and data specified to show chart
      myChart.setOption(option)
    },
  },
}
</script>