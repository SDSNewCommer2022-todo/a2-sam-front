<!--eslint-disable-->
<template>
  <div class="todo">
    <div class="todo__todoTop">
      <p class="todo__todoTop--greet">{{ greet }}, {{ $store.getters.getOwner }}</p>
      <div class="todo__todoTop--notice">
        <p class="todo__todoTop--noticeText">You've got</p>
        <p class="todo__todoTop--noticeTask">{{ completedTask }} / {{ totalTask }}</p>
        <p class="todo__todoTop--noticeText">task Today!</p>
      </div>
      <TextField v-bind:isBorder="true" @submit="submitTask"></TextField>
    </div>
    <div class="todo__todoDown">
      <div v-if="totalTask !== 0" class="todo__todoDown--options">
        <MyDropdown :items="items"></MyDropdown>
        <div class="todo__todoDown--clearBtn" @click="deleteAll">
          Clear All
        </div>
      </div>
      <div class="todo__todoDown--todolist">
        <MyTodoList @updateTask="updateTask" @deleteTask="deleteTask"></MyTodoList>
      </div>
    </div>
  </div>

</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
import TextFiled from './TextFiled.vue';
import MyDropdown from './MyDropdown.vue';
import MyTodoList from './MyTodoList.vue';

export default {
  name: 'MyTodo',
  data() {
    return {
      greet: '',
      totalTask: 0,
      completedTask: 0,
      items: ['Oldest', 'Latest']
    };
  },
  components: {
    'TextField': TextFiled,
    'MyDropdown': MyDropdown,
    'MyTodoList': MyTodoList
  },
  methods: {
    ...mapMutations({
      pushData: 'pushData',
      addList: 'addList'
    }),
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
      axios.post(`http://localhost:8080/api/todo`, {
        'owner': this.$store.getters.getOwner,
        'content': content,
        'status': 'REGISTERED'
      })
        .then((res) => {
          this.totalTask += 1;
          this.pushData(res.data);
        })
        .catch(() => {
        });
    },
    /*eslint-disable*/
    getList() {
      axios.get(`http://localhost:8080/api/?owner=${this.$store.getters.getOwner}`)
        .then((res) => {
          this.addList(res.data);
          this.totalTask = this.$store.getters.getTotalList.length;
          this.completedTask = this.$store.getters.getCompletedList.length;
        });
    },
    updateTask(task) {
      axios.patch(`http://localhost:8080/api/`, task)
        .then((res) => {
          this.getList();
        })
        .catch(() => {
        });
    },
    deleteTask(id) {
      axios.delete(`http://localhost:8080/api/${id}`)
        .then(() => {
          this.getList();
        })
        .catch(() => {

        });
    },
    deleteAll(){
      axios.delete(`http://localhost:8080/api/?owner=${this.$store.getters.getOwner}`)
        .then(() =>{
          this.$store.state.todoList = []
          this.getList();
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
.todo {
  display: flex;
  flex-direction: column;
  width: 100%;

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

  .todo__todoDown {
    display: flex;
    flex-direction: column;
    background: #F2F2F2;
    min-height: 400px;

    .todo__todoDown--options {
      display: flex;
      padding: 24px 60px;
      justify-content: space-between;
      align-items: center;

      .todo__todoDown--clearBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 14px;
        padding: 10px 12px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        opacity: 0.6;
        &:hover {
          background: rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          opacity: 1;
          cursor: pointer;
        }
      }

    }

    .todo__todoDown--todolist {
      display: flex;
      flex: 1;
    }
  }
}
</style>
