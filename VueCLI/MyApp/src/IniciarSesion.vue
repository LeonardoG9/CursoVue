<template>
  <div class="container">
    <div class="bg-light p-5 rounded-lg m-3">
      <formulario>
        <div slot="titulo">
        <h3>Iniciar sesión</h3>

        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="correo ">Correo Electrónico</label>
            <input
              id="correo"
              placeholder="@Email"
              type="email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="correo ">Correo Electrónico</label>
            <input
              id="clave"
              placeholder="Password"
              type="password"
              class="form-control"
            />
          </div>
        </div>
        <div >
          <br>
        <button class="btn btn-primary">Iniciar sesión</button>
        </div>
      </formulario>
    </div>
  </div>
</template>

<script>
import Formulario from "./Formulario.vue";
export default {
  components: {
    Formulario,
  },
  destroyed(){
      console.log('Componente destruido!')
  },
  activated(){
      console.log('Componente actviado')
  },
  deactivated(){
      console.log('Componente desactivado')
  }
}
</script>

<style scoped>

</style>