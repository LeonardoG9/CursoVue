<template>
  <div id="app" class="container">
    <div class="bg-light p-5 rounded-lg m-3">
      <titulo :titulo="Titulo"></titulo>
      {{numTasks}}
      <add-task :tareas="tareas" v-on:increment="numTasks+=$event"></add-task>
      <task-list :tareas="tareas"></task-list>
      
    </div>
  </div>
</template>

<script>
import Titulo from "./Titulo.vue";
import AddTask from "./AddTask.vue";
import TaskList from './TaskList.vue'
export default {
  components: {
    Titulo,
    AddTask,
    TaskList
  },
  data() {
    return {
      Titulo: "Lista de tareas*",
      numTasks:3,
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
};
</script>

<style>
</style>
