<template>
  <div class="todo">
    <div class="todo__todoTop">
      <p class="todo__todoTop--greet" >{{ greet }}, {{ $store.state.inputContent }}</p>
      <div class="todo__todoTop--notice">
        <p class="todo__todoTop--noticeText">You've got</p>
        <p class="todo__todoTop--noticeTask">0 / {{ totalTask }}</p>
        <p class="todo__todoTop--noticeText">task Today!</p>
      </div>
      <TextField v-bind:isBorder="true" @submit="submitTask"></TextField>
    </div>
    <div class="todo__todoDown">
      <div class="todo__todoDown--options">
        <MyDropdown :items="items"> </MyDropdown>
      </div>
      <div class="todo__todoDown--todolist">
      <MyTodoList @getList="getList"></MyTodoList>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import TextFiled from './TextFiled.vue';
import MyDropdown from './MyDropdown.vue';
import myTodoList from './MyTodoList.vue';

export default {
  name: 'MyTodo',
  data() {
    return {
      greet: '',
      totalTask: 0,
      items: ['Oldest','Latest']
    };
  },
  components: {
    'TextField': TextFiled,
    'MyDropdown': MyDropdown,
    'MyTodoList' : myTodoList
  },
  methods: {
    getGreet() {
      let greet = '';
      const now = new Date().getHours();
      if (now >= 7 && now < 12) {
        greet = 'Good morning';
      } else if (now >= 12 && now < 18) {
        greet = 'Good afternoon';
      } else if (now >= 18 && now < 22) {
        greet = 'Good evening';
      } else {
        greet = 'Good night';
      }
      return greet;
    },
    submitTask(content) {
      axios.post(`http://localhost:8080/api/create`, {
        'owner': this.$store.state.inputContent,
        'content': content,
      })
        .then((res) => {
          this.totalTask += 1;
          this.$store.state.todoList.push(res.data)
        })
        .catch(() => {
        });
    },
    /*eslint-disable*/
    getList(){
      axios.get(`http://localhost:8080/api/read?owner=${this.$store.state.inputContent}`)
        .then((res) =>{
          const todoList = res.data;
          for(let idx in todoList){
            todoList[idx].status === 'DELETED' ? todoList.splice(idx,1) : '';
          }
          this.$store.state.todoList = todoList;
          this.totalTask = todoList.length
        })
    }
  },
  created() {
    this.greet = this.getGreet();
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
.todo{
  display: flex;
  flex-direction: column;

  .todo__todoTop {
    display: block;
    margin-left: 60px;
    margin-right: 60px;
    flex-direction: column;
    height: 324px;


    .todo__todoTop--greet {
      display: flex;
      align-items: center;
      height: 36px;
      margin-top: 24px;
      color: #2C3E50;
      font-size: 24px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
    }

    .todo__todoTop--notice {
      margin-top: 16px;
      margin-bottom: 16px;

      .todo__todoTop--noticeText {
        display: flex;
        align-items: center;
        height: 36px;
        color: #2C3E50;
        font-size: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
      }

      .todo__todoTop--noticeTask {
        display: flex;
        align-items: center;
        height: 72px;
        font-size: 48px;
        color: #2C3E50;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
      }
    }
  }

  .todo__todoDown{
    display: flex;
    flex-direction: column;
    background: #F2F2F2;
    min-height: 400px;
    height: 100%;
    width: 100%;
    .todo__todoDown--options{
      display: flex;
      padding: 24px 60px;
    }
    .todo__todoDown--todolist{
      display: flex;
    }
  }
}
</style>
