<template>
  <div class="container">
  <div class="container__welcome">
    <p>Welcome Newbie!!</p>
    <p>MyTodo makes it easy to stay organized and message your life.</p>
  </div>
  <div class="container__nameQuestion">
    <p>what is your name?</p>
  </div>
  <div class="container__textField">
    <TextField v-bind:isBorder="false" @submit="setName"></TextField>
  </div>

  </div>
</template>


<script>
import { mapMutations } from 'vuex';
import TextFiled from './TextFiled.vue';

export default {
  name: 'WelcomeMessage',
  components: {'TextField' : TextFiled },
  methods:{
    ...mapMutations({
      saveName: 'saveContent',
    }),
    setName(name){
      this.saveName(name);
      this.$router.push('/todo');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: auto;
  height: auto;
  left: 120px;
  top: 108px;

  .container__welcome {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: #2C3E50;
  }

  .container__nameQuestion {
    margin-top: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #2C3E50;
  }

  .container__textField {
    margin-top: 20px;
    width: auto;
    height: auto;
  }
}
</style>
