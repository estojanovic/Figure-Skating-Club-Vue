<template>
  <div>
    <PrivateLessonsList/>
  </div>

</template>

<script>

import PrivateLessonsList from '@/components/PrivateLessonsList.vue';
import {mapActions} from 'vuex';

export default {
  name: "PrivateLessons",

  components: {
    PrivateLessonsList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchFlights();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchFlights'
    ])
  }


}
</script>


<style scoped>


</style>