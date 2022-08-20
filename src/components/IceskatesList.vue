<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="iceskatesTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="iceskatesTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="iceskatesTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
   
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "IceskatesList",

  data() {
    return {
      fields: ['model', 'size'],
      items: [],
      currentPage: 1,
      perPage: 20,
    }
  },

  computed: {
    ...mapState([
      'iceskates',
      'token',
        'iceskateInformation'
    ]),
    iceskatesTable: function () {
      return this.iceskates;
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setIceskateInformation'
    ]),

    rowClicked(record) {
      this.setIceskateInformation(record);
      console.log("kliknuo na "+ this.iceskateInformation.model)
    }
  }
}
</script>


<style scoped>


</style>