<template>
  <div id="app" class="container">
    <div class="bg-light p-5 rounded-lg m-3">
      <titulo :titulo="Titulo" :numTasks="numTasks"></titulo>

      <add-task :tareas="tareas" :actualizarCount="actualizarCount"></add-task>
      <task-list v-if="tareas.length>0" :tareas="tareas"></task-list>
      <p v-else>
        No tienes tareas pendientes!
      </p>
    </div>
  </div>
</template>

<script>
import Titulo from "./Titulo.vue";
import AddTask from "./AddTask.vue";
import TaskList from "./TaskList.vue";
import { bus } from "./main";
export default {
  components: {
    Titulo,
    AddTask,
    TaskList,
  },
  data() {
    return {
      Titulo: "Lista de tareas",
      numTasks: 3,
      tareas: [
        {
          task: "Aprender Vue.JS",
          done: false,
        },
        {
          task: "Aprender Laravel",
          done: false,
        },
        {
          task: "Aprender Mongo",
          done: false,
        },
      ],
    };
  },
  methods: {
    actualizarCount() {
      this.numTasks++;
    },
  },
};
</script>

<style>
</style>
