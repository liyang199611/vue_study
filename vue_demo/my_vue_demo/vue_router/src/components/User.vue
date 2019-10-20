<template>
    <div>
      用户名: <input type="text" v-bind:value="username">
      <h1>我是{{username}}</h1>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                username:"历阳"
            }

        }
    }
</script>

<style scoped>

</style>
