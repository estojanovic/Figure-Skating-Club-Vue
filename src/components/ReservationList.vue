<template>
  <div>
    <p></p>
    <h3>Reservations</h3>
    <p></p>
    <h5>Your list of private lessons:</h5>
    <p></p>

   
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="reservationTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
   

   <b-button v-on:click="cancelLesson()" >Cancel lesson</b-button>
  </div>
</template>

<script>

import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'ReservationList',

  props: {

    privatnicas:Object

  },

   data() {
    return {
      fields: ['day', 'time', 'coach'],
      items: [],
      currentPage: 1,
      perPage: 20,
    }
  },

  computed: {
    ...mapState([
      'reservations',
      'token',
      'reservationInformation'
    ]),
    reservationTable: function () {
      return this.reservations;
    }
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
      'setReservationInformation'
    ]),

    logout() {
      this.removeToken();
    },

    cancelLesson() {    
    //this.setReservationInformation("");
    //this.$router.push({ name: 'Reservation'});

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