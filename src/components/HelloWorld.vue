<template>
  <div class="hello">
    <p></p>
    <h1>{{ msg }}</h1>
    <p>
      Enjoy your time on the ice performing pirouettes and jumps.
     
    </p>
    <h3>Choose your own coach</h3>
    <p>
      Learn from one of ours amazing coaches.
    </p>
    <h3>Join ice skating club</h3>
    <p>
      Under categories you can see the trainings schedule.
    </p>
    
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
