<template>
   <div>
      <div class="d-flex align-items-center justify-content-between my-4">
         <content-box>
            <div slot="content" class="py-4 px-5 bg-light">
               <div class="text-left mb-4 h5">
                  Shared By Organization
               </div>
               <div class="py-4">
                  <el-carousel type="card" height="550px" :loop="false" :autoplay="false" trigger="click">
                     <el-carousel-item v-for="item in 6" :key="item">
                        <div class="text-left bg-white border border-dark px-2 py-4">
                           <div class="h5 ml-4 media align-items-center">
                              <el-avatar icon="el-icon-user-solid"></el-avatar>
                              <div class="media-body pl-3">
                                 Telekom Malaysia Bhd
                              </div>
                           </div>
                           <div class="bg-light shadow-sm mx-4 my-4 text-center">
                              <img src="https://i.imgur.com/ZZEI7Cx.png" width="400px" class="img-fluid">
                           </div>
                           <div class="ml-4">
                              First Paragraph
                              Second Paragraph
                           </div>
                        </div>
                        <!-- <h3 class="medium">{{ item }}</h3> -->
                     </el-carousel-item>
                  </el-carousel>
               </div>
            </div>
         </content-box>
      </div>
      <div class="d-flex align-items-center justify-content-between my-4">
         <content-box class="mr-2">
            <div slot="content" class="text-left py-4 px-5">
               <div class="h5 pb-2">
                  Stepping Target by Company/Organization
               </div>
               <div class="d-flex align-items-center justify-content-between" v-for="item in 10">
                  <div class="mr-2">
                     Tenaga Nasional Bhd
                  </div>
                  <div class="text-primary" v-for="dot in 20" style="font-size: 3px">
                     <i class="fas fa-circle"></i>
                  </div>
                  <div class="text-success ml-2">
                     3K
                  </div>
               </div>
            </div>
         </content-box>
         <content-box class="ml-2">
            <div slot="content" class="text-left py-4 px-5">
               <div class="h5 pb-2">
                  Water Taking Target by Company/Organization
               </div>
               <div class="d-flex align-items-center justify-content-between" v-for="item in 10">
                  <div class="mr-2">
                     Tenaga Nasional Bhd
                  </div>
                  <div class="text-primary" v-for="dot in 20" style="font-size: 3px">
                     <i class="fas fa-circle"></i>
                  </div>
                  <div class="ml-2 text-success">
                     8 Glasses
                  </div>
               </div>
            </div>
         </content-box>
      </div>
   </div>
</template>
<script>
import ContentBox from '~/components/common/contentBox'

export default {
   components: {
      ContentBox
   },
   data: () => ({}),
   methods: {}
}
</script>