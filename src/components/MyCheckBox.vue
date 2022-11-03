<template>
  <div class="container">
    <img v-if="isChecked" :src="checkHov" @click="check" alt="checkHov" class="container__hov"/> <!--eslint-disable-line-->
    <img v-else :src="checkNor" @click="check" alt="checkNor" class="container__nor"/> <!--eslint-disable-line-->
  </div>
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
.container{
  .container__hov{
    &:hover{
      background: rgba(42, 130, 240, 0.1);
      border-radius: 50%;
    }
  }
  .container__nor{
    &:hover{
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }
  }
}

</style>
