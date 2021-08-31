<template>
  <div id="app">
    <div id="nav">
      <button @click="customerPage">enter</button>
      <button @click="eventPage">first</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return{}
  },
  methods:{
      customerPage(){
        this.$router.push({path:'/Enter'})
      },
      eventPage(){
        this.$router.push({path:'/'})
      }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
  /* text-align: center; */
   font-family: 'Poppins', sans-serif;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
