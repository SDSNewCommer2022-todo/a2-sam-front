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
TodoTopBar{
  width: 100vw;
  height: 100vh;
}
.container {
  display: block;
  flex-direction: column;
  height: 100%;

}
</style>
