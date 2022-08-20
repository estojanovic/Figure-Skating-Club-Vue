<template>
  <div>
    <p></p>
    <h3> Training schedule </h3>
    
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