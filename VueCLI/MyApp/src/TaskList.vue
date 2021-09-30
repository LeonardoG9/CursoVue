<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(tarea,index) of tareas" :class={done:tarea.done} :tarea="tarea" :key="index"> 
      {{ tarea.task }}
      <span class="float-end">
        <button
          @click="tarea.done = !tarea.done"
          class="btn btn-xs btn-success glyphicon glyphicon-ok"
          type="button"
        ></button> 
        <button
          @click="deleteTask(index)"
          class="btn btn-xs btn-danger glyphicon glyphicon-remove"
          type="button"
        ></button>
      </span>
    </li>
  </ul>
</template>

<script>
import {bus} from './main'
export default {
  props: ['tareas'],
  methods: {
    deleteTask(index) {
      this.tareas.splice(index, 1);
      bus.actualizarContador(this.tareas.length )
    },
  },
};
</script>
<style >
    .done{
    color:gray;
    text-decoration: line-through;
}
</style>