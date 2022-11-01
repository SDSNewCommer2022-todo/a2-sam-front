<template>
  <div class="listContainer">
    <div class = "listContainer__empty">
      <p>There is no task.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTodoList'
};
</script>

<style lang="scss" scoped>
p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  opacity: 0.6;
}
.listContainer{
  display: flex;
  height: 100%;
  width: 100%;
  .listContainer__empty{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
