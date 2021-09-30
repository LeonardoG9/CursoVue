new Vue({
  el: "#app",
  data: {
    Titulo: "Lista de Tareas",
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
  },
  methods: {
    addTask: function () {
      const task = this.newTask.trim();
      if (task) {
        this.tareas.push({ task: task, done: false });
      }
      this.newTask=''
    },
    deleteTask:function(index){
        this.tareas.splice(index,1)
    }
  },
});
