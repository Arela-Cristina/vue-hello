//strapolo ilmetodo dic reazzione App VUE
const { createApp } = Vue


//creazione della istanza del titolo
  createApp({
    
    data() {
      return {
        message: 'Titolone',
        miaClasse: 'titolo',
        src: "mitsuri-kanroji.webp",
      }
    }
  }).mount('#header')