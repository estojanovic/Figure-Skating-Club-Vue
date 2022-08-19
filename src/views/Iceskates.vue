<template>
  <div>
    <IceskatesList/>
  </div>

</template>

<script>

import IceskatesList from '@/components/IceskatesList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Iceskates",

  components: {
    IceskatesList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchIceskates();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchIceskates'
    ])
  }


}
</script>


<style scoped>


</style>