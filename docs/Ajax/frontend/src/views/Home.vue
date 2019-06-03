<template>
    <div class="home">
        <form @submit.prevent="insertData">
            <input type="text" v-model="name">
            <button>添加</button>
        </form>
        <ul>
            <li v-for="item,index in list">
                {{item}}
                <span @click="del(index)">删除</span>
            </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
    name: "home",
    data() {
        return {
            list:[],
            name:''
        };
    },
    methods:{
        getList(){
            axios.get("http://127.0.0.1:7001/students")
            .then(res => {
                console.log(res);
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        del(index){
            axios.delete(`http://127.0.0.1:7001/students/${index}`)
            .then(res => {
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        insertData(){
            axios.post("http://127.0.0.1:7001/students",{
                name:this.name
            })
            .then(res => {
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        this.getList();
    }
};
</script>
