const data = {
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
  newTask: "",
};
Vue.component("titulo", {
  template: "<h2>{{Titulo}}</h2>",
  data: function () {
    return { Titulo: "Lista de tareas" };
  },
});
Vue.component("lista-tareas", {
  template: `
    <ul class="list-group">
    <li
      class="list-group-item"
      v-bind:class="{done: task .done}"
      v-for="(task,index) of tareas"
    >
      {{task.task}}
      <span class="float-end">
        <button
          @click="task.done=!task.done"
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
    `,
  data: function () {
    return data;
  },
  methods: {
    deleteTask: function (index) {
      this.tareas.splice(index, 1);
    },
  },
});
Vue.component("nueva-tarea", {
  template: `
    <div class="input-group mb-3">
        <input @keypress.enter="addTask()" class="form-control" placeholder="Add task" v-model="newTask" />
        <span class="input-group-btn">
          <button
            class="btn btn-xs btn-primary"
            @click="addTask()"
            type="button"
          >
            Add
          </button>
        </span>
      </div>
    `,
  data: function () {
    return data;
  },

  methods: {
    addTask: function () {
      const task = this.newTask.trim();
      if (task) {
        this.tareas.push({ task: task, done: false });
      }
      this.newTask = "";
    },
  },
});
new Vue({
  el: "#app",
  data: data,
});
