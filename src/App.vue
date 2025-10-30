<template>
  <div class="app-background">

      <img src="/src/assets/boton_atras.JPG" alt="Atras" class="boton_atras" @click="boton_atras"/>
      <img src="/src/assets/boton_continuar.JPG" alt="Continuar" class="boton_continuar" @click="boton_continuar"/>
      
      <img
        v-if="imagenes.length > 0"
        :src="imagenes[indiceActual]"
        alt="Imagen actual"
        class="mensajes"
      />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Importar imágenes correctamente
import msg1 from './assets/mensaje_1.JPG';
import msg2 from './assets/mensaje_2.JPG';
import msg3 from './assets/mensaje_3.JPG';
import msg4 from './assets/mensaje_4.JPG';
import msg5 from './assets/mensaje_5.JPG';
import msg6 from './assets/mensaje_6.JPG';
import msg7 from './assets/mensaje_7.JPG';
import msg8 from './assets/mensaje_8.JPG';
import msg9 from './assets/mensaje_9.JPG';
import msg10 from './assets/mensaje_10.JPG';
import msg11 from './assets/mensaje_11.JPG';
import msg12 from './assets/mensaje_12.JPG';
import msg13 from './assets/mensaje_13.JPG';

// Lista de imágenes usando los imports
const imagenes = [
  msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13
]

// Importar audios
import bizcochito_ from './assets/bizcochito.mp3';
import motomami_ from './assets/motomami.mp3';
import ruido_ from './assets/ruido.mp3';
import buleiras_ from './assets/bulerias.mp3';
import saoko_ from './assets/saoko.mp3';

// Crear objetos Audio
const saoko = new Audio(saoko_);
const buleiras = new Audio(buleiras_);
const ruido = new Audio(ruido_);
const motomami = new Audio(motomami_);
const bizcochito = new Audio(bizcochito_);

const indiceActual = ref(0)

// Función para avanzar
function boton_continuar() {
  if (indiceActual.value < imagenes.length - 1) {
    indiceActual.value++

    // Reproducir audios según el índice
    switch (indiceActual.value) {
      case 3: bizcochito.play(); break;
      case 5: motomami.play(); break;
      case 7: ruido.play(); break;
      case 9: buleiras.play(); break;
      case 10: saoko.play(); break;
    }
  }
}

// Función para retroceder
function boton_atras() {
  if (indiceActual.value > 0) {
    indiceActual.value--
  }
}

</script>

<style>

.app-background {
  position: relative;  /* para elementos absolutos */
  width: 100dvh;
  height: 100dvh;
  margin: 0px;
  padding: 0px;
}

.mensajes {
  position: absolute;
  top: 20px; 
  left: 10px; 
  width: 370px;
  height: auto;
}

.boton_atras {
  position: absolute;
  top: 650px; 
  left: 20px; 
  width: 170px;
  height: auto;
}
.boton_continuar {
  position: absolute;
  top: 650px; 
  left: 200px; 
  width: 180px;
  height: auto;
}
</style>