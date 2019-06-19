<template>
<div>
  <!-- <li v-for="user,index in clazzList">
  <input type="text" name="clazz_id" style="display:block" value="{{user.id}}">
  </li> -->
    <form @submit="insertClazz">
      <input type="text" v-model="name" placeholder="请输入内容">
      <h1>
        那你说那是你
      </h1>
<!-- <el-input v-model="name" placeholder="请输入内容"></el-input> -->
  <!-- <el-button type="primary" round>添加</el-button> -->
    <button>添加</button>
    </form>
    <form action="" @submit="del">
            <input type="text" v-model="dname" placeholder="请输出你要删除的班级">
            <!-- <input type="text" name="" id=""> -->
        <button>
          删除
        </button>
        </form>
    <li v-for="(item,index) in clazzList">
        <!-- <input type="text" v-model="{{item.id}}" name="id"> -->
        <!-- <input type="text" name="shan" value="{{item.id}}"> -->
        <span>
          {{index}}
          <!-- {{loop.index}} -->
        </span>
        <span>
          {{item.id}}
        </span>
        <span>
          {{item.name}}
        </span>
        <button @click="del(item.id)">
          删除
        </button>
        <input type="text" v-model="putclazz">
        <button @click="put(item.id)">
          修改
        </button>
    </li>
<!-- <input type="text" placeholder="请输入内容" v-model="name"> -->
</div>
</template>
<script>
import axios from 'axios'

// import { create } from 'domain';

  export default {
    data() {
      return {
        // clazz_id:this.clazz_id,
        // id:"",
        name:'',
        putclazz:'',
        clazzList:[],
        dname:"",
        // id:clazzList.id,
        activeName: 'second',
         tableData: [{
          num: '1',
          clazz: '计算机一班'
        }, {
          num: '2',
          clazz: '计算机一班'
        }, {
          num: '3',
          clazz: '计算机一班'
        }, {
          num: '4',
          clazz: '计算机一班'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getclazzList(){
      axios.get("http://127.0.0.1:7001/hallo",{

      })
      .then(res =>{
        console.log(res.data)
        this.clazzList = res.data
        // console.log(123)
        // console.log(this.clazzList)
        // console.log(88888888)
        // console.log(res.dat)
        // console.log(456)
      })
      // .then(function(response) {
      //   console.log(response.data)
      //   this.clazzList = response.data;
      // // document.getElementById("iii").innerHTML=response.data
      // })
    },
    insertClazz(){
      axios.post("http://127.0.0.1:7001/hallo",{
        name:this.name
      })
      .then(res => {
        this.clazzList = res.data
      })
    },
    //  del(index){
    //         axios.delete(`http://127.0.0.1:7001/deletehallo/${index}`,{
    //           // data:{id:36}
    //         })
    //         .then(res => {
    //           console.log(res.data);
    //             this.clazzList = res.data;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    //     },
             del(id){
            axios.delete(`http://127.0.0.1:7001/deletehallo/` + id ,{
              // data:{dname:this.dname}
            })
            .then(res => {
              this.getclazzList()
              console.log(res.data);
                this.clazzList = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
                    put(id){
            
            axios.put(`http://127.0.0.1:7001/putclazz/` + id ,{
              putclazz:this.putclazz
            })
            .then(res => {
              this.getclazzList()
              console.log(res.data);
                this.clazzList = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
    },
    created(){
      this.getclazzList()
    }
  };
</script>