<template>
  
  <div>
    <ReservationList/>
  </div>
</template>

<script>

import ReservationList from '@/components/ReservationList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Reservation",

  components: {
    ReservationList
  },

  data() {
    return {
    }
  },

  mounted() {
    
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      
    ])
  }


}
</script>


<style scoped>


</style>