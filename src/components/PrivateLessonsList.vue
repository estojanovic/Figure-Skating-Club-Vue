<template>
  <div>
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
      'privatelessonInformation'
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
      'setPrivatelessonInformation'
    ]),

    rowClicked(record) {
      this.setPrivatelessonInformation(record);
      console.log("kliknuo na "+ this.privatelessonInformation.day)
    },
    goToReservation() {
      if (this.token !== "") {
        let privatnicas = this.privatelessonInformation
        console.log("privatni cas " + privatnicas);
        console.log(privatnicas);
        this.$router.push({ name: 'Reservation', params: {privatnicas}});
        //ovde treba da se upisuje u bazu 

      }
      else alert("You cannot make reservations. Log in first!");
    }
  }
}
</script>


<style scoped>


</style>