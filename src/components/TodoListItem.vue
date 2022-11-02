<template>
<div class="listItem">
  <p class="listItem__content">
    {{todo.content}}
  </p>
  <p class="listItem__date">
    {{ todo.created_date.substr(5, 2) + '/' + todo.created_date.substr(8, 2) }}
  </p>


</div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props:["todo"]
};
</script>

<style lang="scss" scoped>
.listItem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 8px;

  .listItem__content{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  .listItem__date{
    color: #000000;
    opacity: 0.6;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
