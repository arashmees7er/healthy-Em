<template>
   <div>
      <component :is="getComponentPath" :data="getChartData" />
   </div>
</template>
<script>
export default {
   props: ['type', 'data'],
   computed: {
      getComponentPath(){
         return () => import(`~/components/Charts/${this.type}Chart`)
      },
      getChartData(){
         return this.data
      },
   }
}
</script>