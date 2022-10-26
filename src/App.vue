<template>
  <div id="app">
    <TodoTopBar v-bind:name="name"></TodoTopBar>
    <WelcomeMessage></WelcomeMessage>
  </div>


</template>
<script>
import TodoTopBar from './components/TodoTopBar.vue';
import WelcomeMessage from './components/WelcomeMessage.vue';

export default {
  data() {
    return {
      name: 'Sam'
    };
  },
  components: {
    WelcomeMessage,
    'TodoTopBar': TodoTopBar
  }

};
</script>
<style lang="scss">

</style>
