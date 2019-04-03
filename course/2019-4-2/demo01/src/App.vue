<template>
  <div id="app">
      <h1>你好 {{message}}</h1>
      <button @click="changeText">改变message</button>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
  </div>
</template>

<script>
import List from "./components/List"
export default {
  data(){
    return {
      message:"vue project"
    }
  },
  components:{List},
  methods:{
    changeText(){
      this.message = "html project"
    }
  }
}
</script>

<style>

</style>
