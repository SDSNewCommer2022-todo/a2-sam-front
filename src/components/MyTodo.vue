<template>
  <div class="todo">
    <div class="todoTop">
      <p class="greet" >{{ greet }}, {{ $store.state.inputContent }}</p>
      <div class="notice">
        <p class="noticeText">You've got</p>
        <p class="noticeTask">0 / {{ totalTask }}</p>
        <p class="noticeText">task Today!</p>
      </div>
      <TextField v-bind:isBorder="true" @submit="submitTask"></TextField>
    </div>
    <div class="todoDown">
      <MyDropdown :items="items"> </MyDropdown>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import TextFiled from './TextFiled.vue';
import MyDropdown from './MyDropdown.vue';

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
    'MyDropdown': MyDropdown
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
      axios.post(`http://localhost:8080/todo`, {
        'owner': this.$store.state.inputContent,
        'content': content,
      })
        .then(() => {
          this.totalTask += 1;
        })
        .catch(() => {
        });
    },
  },
  created() {
    this.greet = this.getGreet();
  }
};
</script>

<style lang="scss" scoped>
.todo{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .todoTop {
    display: flex;
    margin-left: 60px;
    margin-right: 60px;
    flex-direction: column;
    width: 100%;
    height: 324px;


    .greet {
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

    .notice {
      margin-top: 16px;
      margin-bottom: 16px;

      .noticeText {
        display: flex;
        align-items: center;
        height: 36px;
        color: #2C3E50;
        font-size: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
      }

      .noticeTask {
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
  .todoDown{
    background: #F2F2F2;
    height: 100%;
    width: 100%;
  }
}
</style>
