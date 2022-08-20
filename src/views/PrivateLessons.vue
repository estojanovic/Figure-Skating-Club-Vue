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
    this.fetchPrivatelessons();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchPrivatelessons'
    ])
  }


}
</script>


<style scoped>


</style>