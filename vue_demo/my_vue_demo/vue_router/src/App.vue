<template>
  <div id="app">
<!--    <router-link to="/home">首页</router-link>-->
    <br>
<!--    <router-link to="/about">关于</router-link>-->
    <button v-on:click="aboutClick">关于</button>
    <button v-on:click="homeClick">首页</button>
    <router-link v-bind:to="'/user/'+userid">用户</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
    methods:{
        homeClick(){
            // 通过代码的方式修改路由
            console.log('homeClick');
            this.$router.push('/home')
        },
        aboutClick(){
            // 通过代码的方式修改路由
            this.$router.push('/about')
            console.log('aboutClick');
        },
    },
    data(){
      return{
          userid:'000001'
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
