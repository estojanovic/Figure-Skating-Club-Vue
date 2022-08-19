<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="trainingsTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="trainingsTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="trainingsTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
   
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "TrainingsList",

  data() {
    return {
      fields: ['day', 'time', 'coach1', 'coach2'],
      items: [],
      currentPage: 1,
      perPage: 20,
    }
  },

  computed: {
    ...mapState([
      'trainings',
      'token',
        'trainingInformation'
    ]),
    trainingsTable: function () {
      return this.trainings;
      // .filter(book => book.libraryId == this.$route.params.id); //mora da bude == umesto ===, jer inace nece da ih nadje kada se uradi drugi put
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setTrainingInformation'
    ]),

    rowClicked(record) {
      this.setTrainingInformation(record);
      console.log("kliknuo na "+ this.TrainingInformation.model)
    }
  }
}
</script>


<style scoped>


</style>