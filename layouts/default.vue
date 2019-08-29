<template>
  <div>
    <template v-if="_.isEqual($route.name, 'index')">
      <home-nav-bar />
      <nuxt />
    </template>
    <template v-else-if="_.includes($route.path, 'admin')">
      <div ref="sideNav" class="navbar-side" style="background: #838383; border-right: 1px solid #fff">
        <div class="pl-4">
          <img src="https://i.imgur.com/ap8bxAH.png" width="200px">
        </div>
        <a v-for="menu in menus" :href="menu.url" :class="{ 'navbar-side__active text-white': _.isEqual(menu.name, _.last(_.split($route.name, '-'))) }">
          <i :class="`${menu.icon} pr-2`"></i>
          {{menu.label}}          
        </a>
      </div>
      <div ref="main-nav" class="navbar-main fixed-top" style="background: #838383; margin-left: 300px" :class="{ 'pl-0' : toggle }">
        <ul class="nav nav_menu_list align-items-center">
            <li class="nav-item">
              <div class="media align-items-center">
                <i class="fas fa-chevron-left px-2" v-if="toggle"></i>
                <div class="media-body">
                  <div style="cursor:pointer" @click="toggleNav()">
                    <i class="fas fa-lg py-3 pr-3 fa-bars"></i>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div style="cursor:pointer">
                <i class="fas fa-lg py-3 pr-3 fa-search"></i>
              </div>
            </li>
        </ul>
        <ul class="nav nav_menu_list align-items-center">
          <li i class="nav-item ml-auto">
            <i class="fas fa-user"></i>
          </li>
        </ul>
      </div>
      <div ref="main" style="margin-left: 300px">
        <nuxt />
      </div>
    </template>
    <template v-else>
      <nuxt />
    </template>
    <!-- <nav-bar v-if="_.includes($route.path, 'admin')"> -->
  </div>
</template>
<script>
import homeNavBar from '@/components/nav-bar/home-navbar'
export default {
  components: {
    homeNavBar,
  },
  data: () => ({
    toggle: true,
    menus: [{
      label: 'Dashboard',
      url: '/admin',
      name: 'admin',
      icon: 'fas fa-tachometer-alt'
    },{
      label: 'Organizations',
      url: '/admin/organizations',
      name: 'organizations',
      icon: 'fas fa-users'
    },{
      label: 'Fitness',
      url: '/admin/fitness',
      name: 'fitness',
      icon: 'fas fa-child'
    },{
      label: 'Report',
      url: '/admin/report',
      name: 'report',
      icon: 'fas fa-chart-line'
    }]
  }),
  methods: {
    toggleNav() {
      this.toggle = !this.toggle
      this.$refs["sideNav"].style.width = !this.toggle ? "0" : "300px";
      this.$refs["sideNav"].style.borderRight = !this.toggle ? "none" : "1px solid #fff";
      this.$refs["main"].style.marginLeft = !this.toggle ? "0" : "300px";
      this.$refs["main-nav"].style.marginLeft = !this.toggle ? "0" : "300px";
    },
  }
}
</script>
