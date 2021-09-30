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
export default {
  props: ["tareas"],
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
        this.$emit('increment',1)
      }
      this.newTask = "";
    },
  },
};
</script>
