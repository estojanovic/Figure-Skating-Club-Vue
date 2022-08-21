<template>
  <div>
    <p></p>
    <h3> Private Lessons </h3>
    <b-pagination
        v-model="currentPage"
        :total-rows="privatelessonsTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="privatelessonsTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="privatelessonsTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

    <p v-if="token">Chosen lesson:  {{ this.privatelessonInformation.day }}  {{ this.privatelessonInformation.time }}  {{ this.privatelessonInformation.coach }}  </p>
    <b-button v-on:click="goToReservation()" >Reserve</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "PrivateLessonsList",

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
      'privatelessons',
      'token',
      'privatelessonInformation',
      'reservationInformation',
      'reservations'
    ]),
    privatelessonsTable: function () {
      return this.privatelessons;
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setPrivatelessonInformation',
      'setReservationInformation'
    ]),

    rowClicked(record) {
      this.setPrivatelessonInformation(record);
      //console.log("kliknuo na "+ this.privatelessonInformation.day)
      
    },
    goToReservation() {
      if (this.token !== "") {
        
        var reservation_object = {
            day: this.privatelessonInformation.day,
            time: this.privatelessonInformation.time,
            coach: this.privatelessonInformation.coach
        };
        
        //this.setReservationInformation(this.privatelessonInformation);
        this.setPrivatelessonInformation("");
        this.reservations.push(reservation_object);
        
        this.$router.push({ name: 'Reservation'});
        

        //emituje poruku serveru da bi je ubacio u bazu i broadcastuje svim klijentima
        //this.$socket.emit('reservation', { body: reservation_object, token: this.token });
        

      }
      else alert("You cannot make reservations. Log in first!");
    }
  }
}
</script>


<style scoped>


</style>