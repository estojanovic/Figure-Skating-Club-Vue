<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form name="myForm" @submit="onSubmit">

      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

       <b-form-group label="Lastname:" label-for="lastname">
        <b-form-input id="lastname" v-model="form.lastname" placeholder="Enter lastname" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>
      
       <b-form-group label="Role:" label-for="role">
        <b-form-input id="role" v-model="form.role" placeholder="Enter role" required></b-form-input>
      </b-form-group>
     
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          name: '',
          lastname: '',
          email: '',
          password: '',
          role: ''
        } 
      }
    },

    methods: {
      ...mapActions([
        'register'
      ]),

      onSubmit(e) {
        e.preventDefault();
        
        let w = document.forms["myForm"]["password"].value;
        if (w === "") {
          alert("Password must be filled out");
          return false;
        } 
        else if (w.length < 5) {
          alert("Password length must be minimum 5");
          return false;
        }
        else if (w.length > 20) {
          alert("Password length must be maximum 20");
          return false;
        }
        
        let q = document.forms["myForm"]["role"].value;
        if (q != "klijent") {
            alert("Role must be klijent");
            return false;
          }


        console.log(this.form);
        console.log("form");
        this.register(this.form);
        console.log(localStorage.token);
        console.log("localStoragetoken");
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>

