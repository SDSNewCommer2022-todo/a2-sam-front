<template>
  <div id="app">
    <TodoTopBar v-bind:name="name"></TodoTopBar>
    <router-view></router-view>
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
.app.router-view{
  height: 100%;
  width: 100%;
}
</style>
