<template>
  <div id="app">
    <TodoTopBar v-bind:name="name"></TodoTopBar>
    <router-view></router-view>
    <WelcomeMessage></WelcomeMessage>
  </div>


</template>
<script>
import TodoTopBar from './components/TodoTopBar.vue';

export default {
  data() {
    return {
      name: 'Sam'
    };
  },
  components: {
    'TodoTopBar': TodoTopBar,
  }

};
</script>
<style lang="scss">

</style>
