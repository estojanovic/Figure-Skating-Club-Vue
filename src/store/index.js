import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',

    flights: [],
    flight: null,
    flightInformation: {
      day: '', time: '', coach: ''
    },

    iceskates: [],
    iceskate: null,
    iceskateInformation:{
      model: '', size: ''
    },

    trainings: [],
    training: null,
    trainingInformation:{
      day: '', time: '', coach1: '', coach2: ''
    }

  },   


  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
      console.log(token);
      console.log("token");
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setFlightInformation(state, flight) {
      // state.flightInformation.id = flight.id;
      state.flightInformation.day = flight.day;
      state.flightInformation.time = flight.time;
      state.flightInformation.coach = flight.coach;
     
    },

    setFlights(state, flights) {
      state.flights = flights;
    },

    setIceskateInformation(state, iceskate){
      state.iceskateInformation.model = iceskate.model;
      state.iceskateInformation.size = iceskate.size;
    },

    setIceskates(state, iceskates){
      state.iceskates = iceskates;
    },

    setTrainingInformation(state, training){
      state.trainingInformation.day = training.day;
      state.trainingInformation.time = training.time;
      state.trainingInformation.coach1 = training.coach1;
      state.trainingInformation.coach2 = training.coach2;
    },

    setTrainings(state, trainings){
      state.trainings = trainings;
    }

  },



  actions: {

    register({ commit }, obj) {
      // console.log(obj)
      fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        
          .then( tkn => { 
            console.log(tkn);
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)
              commit('setToken', tkn.token)
            }
          });
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            console.log("hello wrol");
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
               console.log(tkn.token)
               console.log(tkn.userId)
              commit('setToken', tkn.token)
              // commit('setLoggedUserId', tkn.userId)
              // console.log("emica je strava")
            }
          });
    },


    fetchFlights({ commit }){
      fetch('http://localhost:7000/admin/privatelessons',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setFlights', res));
    },

    fetchIceskates({ commit }){
      fetch('http://localhost:7000/admin/iceskates',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setIceskates', res));
    },

    fetchTrainings({ commit }){
      fetch('http://localhost:7000/admin/trainings',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setTrainings', res));
    }
    



  },


  modules: {
  }
})
