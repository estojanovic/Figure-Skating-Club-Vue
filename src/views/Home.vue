<template>
  <div class="home">
    <HelloWorld msg="Ice skating private lessons "/>
    <img alt="Vue logo" src="../assets/iceskating.jpg" width="100%" height="auto">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
