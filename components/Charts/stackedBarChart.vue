<template>
  <div :id="id" style="min-height: 400px"/>
</template>

<script>
import echarts from 'echarts'
import { REPORT_COLORS } from '@/assets/js/constant'

export default {
  name: 'StackedBarChart',
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
          trigger: 'axis',
        },
        legend: {
          data: _.map(this.data, 'name'),
          bottom: 0,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '40px',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'download',
            },
          },
        },
        color: REPORT_COLORS,
        xAxis: {
          type: 'category',
          data: this.xLabels,
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          type: 'value',
        },
        series: this.data.map(d => {
          return {
            name: d.name,
            type: 'bar',
            data: d.value,
            stack: '1',
          }
        }),
      }

      // use configuration item and data specified to show chart
      myChart.setOption(option)
    },
  },
}
</script>