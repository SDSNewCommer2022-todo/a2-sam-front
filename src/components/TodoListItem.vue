<template>
  <div class="listItem">
    <div class="listItem__left">
      <MyCheckBox class="listItem__left--checkbox" :isChecked="isChecked" @check="check" >
      </MyCheckBox>
      <div class="listItem__left--content" :class="{textDeco : isChecked}">
        <p>{{ todo.content }}</p>
      </div>
    </div>
    <div class="listItem__right">
      <p class="listItem__right--date">
        {{ todo.created_date.substr(5, 2) + '/' + todo.created_date.substr(8, 2) }}
      </p>
      <img :src="removeNor" alt="removebtn"/>
    </div>
  </div>
</template>

<script>
import removeNorIcon from '../assets/btn_remove_nor.svg';
import MyCheckBox from './MyCheckBox.vue';

export default {
  name: 'TodoListItem',
  components :{
    'MyCheckBox' : MyCheckBox
  },
  props: ['todo','index'],
  data() {
    return {
      removeNor: removeNorIcon,
      isChecked : this.todo.status === "COMPLETED",
    }
  },
  /*eslint-disable*/
  methods:{
    check(){
      if(this.isChecked){
        this.todo.status = "REGISTERED"
      }else if(!this.isChecked){
        this.todo.status = "COMPLETED"
      }
      this.isChecked = !this.isChecked;
      this.$emit('updateTask',this.todo)
    },
  }

};
</script>

<style lang="scss" scoped>
.textDeco{
  text-decoration-line: line-through;
  color: #000000;
  opacity: 0.6;
}
.listItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 8px;

  .listItem__left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .listItem__left--checkbox{
      display: flex;
      align-items: center;
    }

    .listItem__left--content {
      display: flex;
      align-items: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      padding-left: 16px;
    }
  }

  .listItem__right {
    display: flex;
    align-items: center;

    .listItem__right--date {
      color: #000000;
      opacity: 0.6;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      padding-right: 12px;
    }
  }
}
</style>
