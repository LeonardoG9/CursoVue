<template>
  <div class="input-group mb-3">
    <input
      @keypress.enter="addTask()"
      class="form-control"
      placeholder="Add task"
      v-model="newTask"
    />
    <span class="input-group-btn">
      <button class="btn btn-xs btn-primary" @click="addTask()" type="button">
        Add
      </button>
    </span>
  </div>
</template>

<script>
import { bus } from "./main";
export default {
  props: ["tareas", "actualizarCount"],
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      const task = this.newTask.trim();
      if (task) {
        this.tareas.push({ task: task, done: false });
        bus.actualizarContador(this.tareas.length);
      }
      this.newTask = "";
    },
  },
  created() {
    bus.actualizarContador(this.tareas.length);
  },
};
</script>
