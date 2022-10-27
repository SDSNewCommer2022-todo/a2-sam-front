<template>
  <div class="todo">
    <p class="greet">{{ greet }}, {{ $store.state.inputName }}</p>
    <div class="notice">
      <p class="noticeText">You've got</p>
      <p class="noticeTask">0 / 0</p>
      <p class="noticeText">task Today!</p>
    </div>
    <TextField v-bind:isBorder="true"></TextField>

  </div>

</template>

<script>
import TextFiled from './TextFiled.vue';

export default {
  name: 'MyTodo',
  data() {
    return {
      greet: '',
    };
  },
  components: {
    'TextField': TextFiled
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
    }
  },
  created() {
    this.greet = this.getGreet();
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  margin-left: 60px;
  margin-right: 60px;
  flex-direction: column;
  height: fit-content;


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
</style>
