<template>
   <div class="bg-layout d-flex align-items-center justify-content-center">
      <div class="bg-white shadow-lg rounded-lg mx-4 border border-dark">
         <div class="h5 px-4 pt-4 text-center">
            <img src="https://i.imgur.com/ap8bxAH.png" class="img-fluid">
            <div class="font-size-md">
               Sign In as Super Admin User
            </div>
         </div>
         <el-divider></el-divider>
         <div class="h5 px-4 pb-4">
            <el-form class="w-100" :model="form" ref="loginForm" label-width="120px" label-position="top">
               <el-form-item prop="email" :rules="[{ required: true, message: '* Email address is required', trigger: 'blur' }, { type: 'email', message: '* Invalid email address', trigger: 'blur' }]">
               <el-input name="email" type="text" v-model="form.email" autocomplete="on" placeholder="Email address" @keyup.enter.native="userLogin">
                  <i class="fa fa-user fa-md pl-1" slot="prefix"></i>
               </el-input>
               </el-form-item>
               <el-form-item prop="pass" :rules="[{ required: true, message: '* Password is required', trigger: 'blur' }]">
               <el-input name="password" :type="passwordType" v-model="form.pass" autocomplete="on" placeholder="Password" @keyup.enter.native="userLogin">
                  <i class="fa fa-lock fa-md pl-1" slot="prefix"></i>
                  <i class="fa fa-md pr-1" :class="{ 'fa-eye': !showPassword, 'fa-eye-slash': showPassword }" slot="suffix" @click="handleShowPassword()"></i>
               </el-input>
               </el-form-item>
               <el-form-item class="mb-0">
               <el-button type="plain" round class="w-100 my-2 py-2" :loading="loading" @click="userLogin()">SIGN IN</el-button>
               </el-form-item>
               <!-- <el-button class="w-100 text-center" type="text" @click="recoveryModalVisible = true">Forget Password?</el-button> -->
            </el-form>
         </div>

      </div>
   </div>
  <!-- <section class="section_header">
    <div class="header-img">
      <div class="header-container">
         <div class="bg-white header-content p-4 shadow rounded-lg">
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
    </div>
  </section> -->
</template>
<script>
export default {
   name: 'Home',
   data: () => ({
      form: {
         email: '',
         pass: '',
         checked: false,
      },
      loading: false,
      showPassword: false,
   }),
   computed: {
      passwordType() {
         return this.showPassword ? 'text' : 'password';
      },
   },
   head () {
      return {
         title: 'Sign In',
         meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'My custom description' }
         ]
      }
   },
   created() {},
   methods: {
      userLogin(){
         this.$router.replace('/admin')
         return
         this.$refs['loginForm'].validate(valid => {
            if (valid) {
               this.loading = true;
               this.$axios({
                  url: `auth/login`,
                  method: 'POST',
                  data: {
                     email: this.form.email,
                     password: this.form.pass,
                  },
               }).then(res => {
                  if (res.error) {
                     throw res.error;
                  }
                  // this.$emit('loggedIn', res);      
                  this.$router.replace('/admin')
                  this.loading = false;
               }).catch(err => {
                  this.loading = false;
                  this.$message({
                     type: 'error',
                     message: err,
                  });
               });
            }
         });
      },
      handleShowPassword() {
         this.showPassword = !this.showPassword;
      },
   }
}
</script>
<style lang="scss" src="~/assets/pages/sign-in.scss" scoped></style>
