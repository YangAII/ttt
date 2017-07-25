<template>
  <div id="app">
    <img src="./assets/logo.png">
	  <router-link to="/">home</router-link>
	  <router-link to="/secondpage">secondPage</router-link>
	  <router-view></router-view>

  </div>
</template>

<script>
	import HomeComponent from './components/home_component.vue'
	import ScondComponent from './components/second_component.vue'

//    const routes = [
//        { path: '/home', component: HomeComponent },
//        { path: '/secondpage', component: SecondComponent }
//    ];
//    const router = Vue.vueRouter({
//	    routes
//    });
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
   
  },
  components:{
    HomeComponent,
    ScondComponent,
  
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
