<template>
   <div class="d-flex align-items-center justify-content-between pt-4">
      <content-box class="mr-4 cursor-pointer">
         <template slot="content">
            <div class="py-4">
               Share/Post Fitness
               <span class="ml-4 px-2 py-1 rounded" style="background-color: cornflowerblue">
                  <i class="fas fa-share text-white"></i>
               </span>
            </div>
         </template>
      </content-box>
      <content-box class="mr-4 cursor-pointer">
         <template slot="content">
            <div class="py-4">
               Stepping Target
               <span class="ml-4 px-2">
                  <i class="fas fa-shoe-prints fa-lg"></i>
               </span>
            </div>
         </template>
      </content-box>
      <content-box class="cursor-pointer">
         <template slot="content">
            <div class="py-4">
               Water Taking Target
               <span class="ml-4 px-2">
                  <i class="fas fa-tint fa-lg" style="color: cornflowerblue"></i>
               </span>
            </div>
         </template>
      </content-box>
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