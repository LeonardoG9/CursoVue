<template>
  <div class="container">
    
    <span>
      {{msg | suspensivos | mayus}}  
    </span>
    <hr>
    <span>{{msg}}</span>
    <hr>
    <span>Temperatura en grados celsius: {{temp}}</span>
    <br>
    <span>Temperatura en grados fahrenheit: {{temp | tempToFar}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'ola k tal',
      temp:30
    }
  },
  filters:{
    mayus(msg){
      return msg.toUpperCase();
    },
    tempToFar(temp){
      return (temp*(9/5))+32
    }
  }

}
</script>

<style>

</style>