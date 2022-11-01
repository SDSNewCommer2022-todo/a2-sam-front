<template>
  <div id="app" class=container>
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
html{
  height: 100%
}
body{
  display: flex;
  height: 100%;
}
.container {
  display: block;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
