<template>
  <div :id="id" style="min-height:400px;" />
</template>

<script>
import echarts from 'echarts'
import { REPORT_COLORS } from '@/assets/js/constant'

export default {
  name: 'LineChart',
  props: ['data', 'xLabels', 'title'],
  data() {
    return {
      id: Math.random().toString(),
    }
  },
  watch: {
    data: {
      handler: function(newVal){
        this.data = newVal
        setTimeout(() => {
          this.render()
        }, 300)
      },
      immediate: true,
    }
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
          left: '1%',
          right: '4.5%',
          bottom: '35px',
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
          boundaryGap: false,
          data: this.xLabels,
        },
        yAxis: {
          type: 'value',
        },
        series: this.data.map(d => {
          return {
            name: d.name,
            type: 'line',
            data: d.value,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: d.value[d.value.length - 1],
                  label: {
                    formatter: d.name,
                  },
                  symbol: 'none',
                  lineStyle: {
                    opacity: 0,
                  },
                },
              ],
            },
          }
        }),
      }

      // use configuration item and data specified to show chart
      myChart.setOption(option)
    },
  },
}
</script>