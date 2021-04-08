// Attraverso l'apposita API di Boolean
// https:flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli
// in pagina all'interno di una lista.


let app = new Vue({
  el: "#root",
  data: {
    email: [],
  },

  methods: {
    genEmail: function() {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.email.push(response.data.response);
        });
      }
    },
  }
});
