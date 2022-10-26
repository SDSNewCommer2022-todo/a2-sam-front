<template>
  <body>
  <div class="welcome">
    <p>Welcome Newbie!!</p>
    <p>MyTodo makes it easy to stay organized and message your life.</p>
  </div>
  <div class="nameQuestion">
    <p>what is your name?</p>
  </div>
  <div class="textfiled">
    <TextFiled></TextFiled>
  </div>

  </body>
</template>


<script>
import TextFiled from './TextFiled.vue';

export default {
  name: 'WelcomeMessage',
  components: { TextFiled }
};
</script>

<style lang="scss" scoped>
body {
  position: absolute;
  width: auto;
  height: auto;
  left: 120px;
  top: 108px;

  .welcome {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: #2C3E50;
  }

  .nameQuestion {
    margin-top: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #2C3E50;
  }

  .textfiled {
    margin-top: 20px;
    width: auto;
    height: auto;
  }
}
</style>
