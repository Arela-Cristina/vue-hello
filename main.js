//strapolo ilmetodo dic reazzione App VUE
const { createApp } = Vue


//creazione della istanza del titolo
  createApp({
    
    data() {
      return {
        message: 'Mitsuri Kanroji',
        miaClasse: 'titolo',
        src: "mitsuri-kanroji.webp",
        miaImg: 'img',
      }
    }
  }).mount('#header')