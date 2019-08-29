<template>
   <div class="shadow-sm text-center min-w-px-200 flex-fill">
      <slot name="content">
         <div v-if="chart">
            <div class="border-bottom py-4">
               {{title}}
            </div>
            <!-- <el-divider /> -->
            <div class="py-4 text-muted">
               Chart Is Currently  Unavailable...
            </div>
            <!-- <chart :type="chart" /> -->
         </div>
         <div v-else class="py-4">
            <div class="h2 font-weight-bold">
               {{value}}
            </div>
            <div>
               {{title}}
            </div>
         </div>
      </slot>
   </div>
</template>
<script>
import Chart from './chart'

export default {
   components: {
      Chart
   },
   props: ['value', 'title', 'chart'],
}
</script>