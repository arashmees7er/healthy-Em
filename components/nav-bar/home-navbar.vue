<template>
   <div>
      <template> 
      <!-- v-if="$store.getters.mediaQuery('up', 'md')"> -->
         <div class="navbar-main fixed-top" ref="navbar">
            <ul class="nav nav_menu_list align-items-center">
               <li class="nav-item mr-3">
                  <div class="nav_employer_logo"></div>
                  <!-- <img src="https://i.imgur.com/ZZEI7Cx.png" class="nav_employer_logo" /> -->
               </li>
            </ul>
            <ul class="nav nav_menu_list align-items-center">
               <li class="nav-item ml-auto" v-for="route in menus" :key="route.name" :id="route.name">
               <nuxt-link v-auth-or="route.auth" v-auth-module="route.auth_module" :to="route.path" class="nav-link" :class="{ active: _.includes($route.name, route.name) }">{{
                  route.label
               }}</nuxt-link>
               </li>
               <li i class="nav-item ml-auto">
                  <nuxt-link :to="`/sign-in`" class="nav-link">
                     <el-button>SIGN IN</el-button>
                  </nuxt-link>
               </li>
            </ul>
         </div>
      </template>
      <!-- <div class="container">
         <nav class="navbar navbar-expand-lg fixed-top" id="ftco-navbar">
            <a class="navbar-brand py-2 px-4" href="index.html">
               <img src="https://i.imgur.com/ZZEI7Cx.png" class="navbar-brand">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
               <li class="nav-item"><a href="program.html" class="nav-link">Program</a></li>
               <li class="nav-item"><a href="coaches.html" class="nav-link">Coaches</a></li>
               <li class="nav-item"><a href="schedule.html" class="nav-link">Schedule</a></li>
               <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
               <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
               <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
            </div>
         </nav>
      </div> -->
   </div>
</template>
<script>
const MENU = [
   {
      label: 'Home',
      path: '/',
      // auth: 'employee_central',
      //  auth_module: MODULE_CENTRAL,
      name: 'index',
   }, {
      label: 'About',
      path: '/about/',
      // auth: 'employee_central',
      //  auth_module: MODULE_CENTRAL,
      name: 'about',
   }, {
      label: 'Services',
      path: '/services/',
      // auth: 'employee_central',
      //  auth_module: MODULE_CENTRAL,
      name: 'services',
   }, {
      label: 'Contact',
      path: '/contact/',
      // auth: 'employee_central',
      //  auth_module: MODULE_CENTRAL,
      name: 'contact',
   },
//   {
//     label: 'Organization',
//     path: '/admin/organization',
//     // prettier-ignore
//     auth: [
//       `${AUTH_ORG_PREFIX}.organization.view_organization`, 
//       `${AUTH_ORG_PREFIX}.department_and_team.view_department_and_team`, 
//       `${AUTH_ORG_PREFIX}.location.view_location`, 
//       `${AUTH_ORG_PREFIX}.cost_center.view_cost_center`],
//     auth_module: MODULE_CENTRAL,
//     header: true,
//     meta: {
//       name: 'organizations',
//       match: 'organization',
//     },
//   },
];

export default {
   name: 'NavBar',
   data: () => ({
      menus: MENU
   }),
   methods: {
      handleScroll () {
         if(window.scrollY > 50) this.$refs['navbar'].style.background = 'rgba(0,0,0,0.8)'
         else this.$refs['navbar'].style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%)'
      },
   },
   beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
   },
   beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
   }
}
</script>


