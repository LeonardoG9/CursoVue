<template>
  <div class="container">
    <div class="bg-light p-5 rounded-lg m-3">
     <button class="btn btn-primary" @click="componenteSeleccionado = 'IniciarSesion'">Iniciar sesión </button>
     <button class="btn btn-primary" @click="componenteSeleccionado = 'CambiarClave' ">Cambiar Contraseña</button>
      <keep-alive>

      <component v-bind:is="componenteSeleccionado"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Formulario from "./Formulario.vue";
import IniciarSesion from './IniciarSesion.vue'
import CambiarClave from './CambiarClave.vue'
export default {
  components: {
    Formulario:Formulario,
    IniciarSesion:IniciarSesion,
    CambiarClave:CambiarClave 
  },
  data() {
    return {
      componenteSeleccionado:'IniciarSesion'
    };
  },
};
</script>

<style scoped>

</style>