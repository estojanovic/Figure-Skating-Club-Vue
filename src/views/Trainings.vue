<template>
  <div>
    <TrainingsList/>
  </div>

</template>

<script>

import TrainingsList from '@/components/TrainingsList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Trainings",

  components: {
    TrainingsList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchTrainings();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchTrainings'
    ])
  }


}
</script>


<style scoped>


</style>