<template>
  
  <div id="app"  v-if="this.token">
  
    <Header subtitle="AAA"/>
    <h2>Your private lesson</h2>

    <ul class="list-group">
      <li class="list-group-item">Day:  {{ this.flightInformation.day }}  </li>
      <li class="list-group-item">Time:  {{ this.flightInformation.time }}  </li>
      <li class="list-group-item">Coach:  {{ this.flightInformation.coach }}  </li>
      <br>
    </ul>
    
   <b-button v-on:click="goToPrivateLessons()" >Cancel lesson</b-button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Reservation',

  components: {
    Header
  },

  props: {

    privatnicas:Object

  },

  computed: {
    ...mapState([
      'token',
      'flightInformation'
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
      'setFlightInformation'
    ]),

    logout() {
      this.removeToken();
    },

      goToPrivateLessons() {

        
        this.setFlightInformation("");
        this.$router.push({ name: 'PrivateLessons'});

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