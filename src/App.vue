<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  created(){
    axios.get('/webApi/getSessionUser').then(res=>{
      if(res.data.user){
        this.$store.commit('setUser',res.data.user);
      }
    }).catch(err=>{

    })
  }
}
</script>
<style>
@import './assets/css/common.css';
</style>