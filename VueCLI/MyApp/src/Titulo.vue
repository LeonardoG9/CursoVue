<template>
  <div>
    <h2>{{ tituloMayus() }}</h2>
    <h3>Tareas a hacer: {{ numTasks }}</h3>
  </div>
</template>
<script>
import { bus } from "./main.js";
export default {
  props: ["titulo"],
  data() {
    return {
      numTasks: 0
    };
  },
  methods: {
    tituloMayus() {
      return this.titulo.toUpperCase();
    },
  },
  created() {
    bus.$on("actualizarContador", (numTareas) => {
      this.numTasks = numTareas;
    });
  },

  // data(){
  //     return {
  //         titulo:'Task list xd'
  //     }
  // }
};
</script>