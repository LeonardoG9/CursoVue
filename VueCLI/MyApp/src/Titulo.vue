<template>
    <h2>{{tituloMayus()}}</h2>
</template>
<script>
export default {
    props:{
        titulo:{
            required:true,
            type:String,
            default:'Tareas tareas'
        }
    },
    methods:{
        tituloMayus(){
            return this.titulo.toUpperCase();
        }
    }
    
    // data(){
    //     return {
    //         titulo:'Task list xd'
    //     }
    // }
}
</script>