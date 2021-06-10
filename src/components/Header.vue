<template>
  <div class="wrapper">
    <div class="img-logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="nav">
      <span> <router-link to="/"> Home </router-link></span>
      <span> <router-link to="/resources">Resources</router-link> </span>
      <span> <router-link to="/providers">Providers</router-link> </span>
    </div>
    <div class="user-login-register">
      <span> <router-link to="/registration">Register</router-link> </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  .img-logo {
    img {
      padding: 0px 20px;
    }
  }
  .nav {
    span {
      margin: 0px 20px;
    }
  }
  .user-login-register {
    span {
      margin: 0px 20px;
    }
  }
}
</style>