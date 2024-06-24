//strapolo ilmetodo dic reazzione App VUE
const { createApp } = Vue


//creazione della istanza del titolo
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')