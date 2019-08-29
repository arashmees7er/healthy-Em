<template>
   <div class="container py-4">
    <div class="my-4">
      <layout-header />
    </div>
    <div class="my-4">
      <layout-content />
    </div>
  </div>
</template>
<script>
import LayoutHeader from '~/components/fitness/layoutHeader'
import LayoutContent from '~/components/fitness/layoutContent'

export default {
  components: {
    LayoutHeader,
    LayoutContent
  },

}
</script>