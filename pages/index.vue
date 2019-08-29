<template>
<div>
  <section class="section_header">
    <div class="header-img">
      <el-carousel height="98vh">
        <el-carousel-item>
          <div class="header-container text-white">
            <div class="header-content pb-2">
              <h2>HEALTH IS WEALTH</h2>
              <h2>HEALTHY ENVIROMENT</h2>
              <h2>HEALTHY WORKER</h2>
            </div>
            <div class="bg-dark header-content p-4 shadow">
              <div class="pb-4 h5">Want to revamp your company's wellness program ?</div>
              <div class="d-flex justify-content-between">
                <div class="px-2">
                  <img src="https://i.imgur.com/ZZEI7Cx.png" alt="" width="100px" height="100%">
                </div>
                <div class="px-2">
                  <div class="pb-3">
                    Get a free PDF version of all 121 wellness ideas from this post. Includes 10 bonus ideas.
                  </div>
                  <el-button class="mb-2">GET PDF</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <!-- <el-carousel-item>
          <div class="header-text-container">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="header-text-container">
          </div>
        </el-carousel-item> -->
      </el-carousel>
    </div>
  </section>
  <!-- <div class="header-text-container text-center">
    <h1 class="header-text">HEALTH IS WEALTH</h1>
    <h1 class="header-text">HEALTHY ENVIROMENT</h1>
    <h1 class="header-text">HEALTHY WORKER</h1>
  </div> -->
  <!-- <section class="section_content">
    <div>{{$store.getters.mediaQuery('up', 'md')}}</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
    <div>ggg</div>
  </section> -->
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data: () => ({
    gg: '',
    zi: {
      name: 'huhu'
    }
  }),
  head: () => ({
      title: 'Healthy-Em',
  })
}
</script>
