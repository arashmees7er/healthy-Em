<template>
   <div class="d-flex align-items-center justify-content-between pt-4">
      <content-box value="24" title="Registered Organizations" class="mr-4" />
      <content-box value="246" title="Total Users" class="mr-4" />
      <content-box value="200" title="Downloaded Apps" />
   </div>
</template>
<script>
import ContentBox from '~/components/common/contentBox'

export default {
   components: {
      ContentBox
   },
   props: {

   },
   data: () => ({

   }),
}
</script>