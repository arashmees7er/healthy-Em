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
import LayoutHeader from '~/components/home/layoutHeader'
import LayoutContent from '~/components/home/layoutContent'

export default {
  components: {
    LayoutHeader,
    LayoutContent
  },

}
</script>

<style>

</style>