<template>
<div>
  <li v-for="item in clazzList">
    {{item.id}}
    {{item.name}}
  </li>
</div>
</template>
<style>

</style>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        clazzList:[
        ],
    }
    },
    methods: {
      getclazzList(){
      axios.get("http://127.0.0.1:7001/getclazz",{

      })
      .then(res =>{
        console.log(res.data)
        this.clazzList = res.data 
      })
    },
  },
  created(){
    this.getclazzList()
  }
  }
</script>