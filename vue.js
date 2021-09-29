new Vue({
  el: "#eventos",
  data:{
    x:0,
    y:0,
    contador:0
  },
  methods:{
   showCoord:function(evento){
    this.x=evento.clientX;
    this.y= evento.clientY;

   },
   sumar: function(){
    this.contador+=1
   }
   }
  }
);
