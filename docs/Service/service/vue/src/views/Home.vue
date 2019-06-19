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
<script src="./static/jquery-1.12.4.js"></script>
<script>
// var xiugai = document.getElementsByClassName("xiugai")[0]
// var gk = document.getElementsByClassName("gk")[0]
// xiugai.click = function(){
//   gk.style.cssText='display:block;'
// }
// $(".xiugai").click(function(){
//   $(".gk").css("display","block")
// })
import axios from 'axios'

// import { create } from 'domain';

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