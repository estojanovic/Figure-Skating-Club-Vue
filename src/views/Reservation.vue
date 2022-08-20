<template>
  
  <div id="app"  v-if="this.token">
  
    <p></p>
    <h3>Reservations</h3>
    <p></p>
    <h5>Your list of private lessons:</h5>
    <p></p>
    <ul class="list-group">
      <li class="list-group-item">Day:  {{ this.privatelessonInformation.day }}  </li>
      <li class="list-group-item">Time:  {{ this.privatelessonInformation.time }}  </li>
      <li class="list-group-item">Coach:  {{ this.privatelessonInformation.coach }}  </li>
      <br>
    </ul>
    
   <b-button v-on:click="goToPrivateLessons()" >Cancel lesson</b-button>
  </div>
</template>

<script>

import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Reservation',

  components: {
   
  },

  props: {

    privatnicas:Object

  },

  computed: {
    ...mapState([
      'token',
      'privatelessonInformation'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
      
    }
  },

  methods: {
    ...mapActions([
      // 'fetchDepartments'
      
    ]),

    ...mapMutations([
      'removeToken',
      'setToken',
      'setPrivatelessonInformation'
    ]),

    logout() {
      this.removeToken();
    },

      goToPrivateLessons() {

        
        this.setPrivatelessonInformation("");
        this.$router.push({ name: 'Reservation'});

    }
  },

  sockets: {
    error(err) {
      alert(err);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>