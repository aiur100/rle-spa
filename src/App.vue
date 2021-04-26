<template>
  <Nav v-if="logged_in"/>
  <div class="container-fluid m-1">
    <router-view />
  </div>  
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  beforeMount(){
    this.$store.commit('START_STATE');
    this.logged_in = this.$store.state.user !== null && this.$store.state.user !== undefined ;
  },
  data(){
    return {
      logged_in: false,
    }
  },
  components: {
    Nav
  }
}
</script>
<style>
body {
  background-color: grey;
}
</style>
