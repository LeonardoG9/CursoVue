<template>
  <div class="formulario">
    <div class="inputs">
      <div class="form-group">
        <label for="Name">Nombre:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model.trim="usuario.name"
        />
      </div>
      <div class="form-group">
        <label for="Name">Correo:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          v-model.trim.lazy="usuario.email"
        />
      </div>
      <div class="form-group">
        <label for="Name">Contraseña:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Password"
          v-model="usuario.password"
        />
      </div>
      <div class="form-group">
        <label for="Name">Edad:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Age"
          v-model.number="usuario.age"
        />
      </div>
      <div class="form-group">
        <label for="Pais">Pais</label>
        <select class="form-control" v-model="usuario.country">
          <option v-for="(country,index) of countries" v-bind:key="index"> {{country}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Mensaje">Mensaje</label>
        <textarea v-model="usuario.message" class="form-control" rows="3"></textarea>
      </div>
      <fieldset class="form-group">
        <legend>Género</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="optionsRadio"
              value="Hombre"
              v-model="usuario.genre"
            />
            Hombre
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="optionsRadio"
              value="Mujer"
              v-model="usuario.genre"
            />
            Mujer
          </label>
        </div>
      </fieldset>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox"  value="acepted" class="form-check-input" v-model="usuario.conditions">
          Acepto las condiciones
        </label>
      </div>
      <button @click.prevent="sendForm" type="submit" class="btn btn-success">Enviar</button> 
    </div>
    <div v-if="show" class="resultados">
      <h3>Resultados:</h3>
      <p><strong>Nombre:</strong> {{usuario.name}}-{{usuario.name.length}}</p>
      <p><strong>Correo:</strong> {{usuario.email}}</p>
      <p><strong>Contraseña:</strong> {{usuario.password}}</p>
      <p><strong>Edad:</strong> {{usuario.age}}-{{typeof usuario.age}}</p>
      <p><strong>País:</strong> {{usuario.country}}</p>
      <p class="msg"><strong>Mensaje:</strong>{{usuario.message}}</p>
      <p><strong>Género:</strong> {{usuario.genre}}</p>
      <p><strong>Condiciones:</strong>{{usuario.conditions}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      usuario:{

        name:'',
        email:'',
        password:'',
        age:'',
        country:'',
        message:'',
        genre:'',
        conditions:[]
      },
      show:false,
      countries:['Mexico','Brasil','Argentina','Chile','Colombia','Venezuela','Estados Unidos','Uruguay']
    }
  },
  methods:{
    sendForm(){
      this.show=true
    }
  }
};
</script>

<style>
@import "./vue.css";
</style>