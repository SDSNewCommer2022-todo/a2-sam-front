<template>
  <img :src="isChecked ? checkHov : checkNor" @click="check" alt="checkbox" :class="{normal : !isChecked, selected : isChecked}"/> <!--eslint-disable-line-->
</template>

<script>
import checkHovIcon from '../assets/ic_checkbox_hov.svg';
import checkNorIcon from '../assets/ic_checkbox_nor.svg';

export default {
  name: 'MyCheckBox',
  props: ['isChecked'],
  data() {
    return {
      checkNor: checkNorIcon,
      checkHov: checkHovIcon,
    };
  },
  methods: {
    check() {
      this.$emit('check');
    }
  }

};
</script>

<style lang="scss" scoped>
.normal:hover{
    background-color: #000000;
    opacity: 10%;
    border-radius: 50%;
}
.selected:hover{
    background-color: #2a82f0;
    opacity: 10%;
    border-radius: 50%;
}
</style>
