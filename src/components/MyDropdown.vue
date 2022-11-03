<template>
  <div>
    <div class="menuItem" :tabindex="-1" @blur="isOpen = false">
      <div class="menuItem__selectedItem" @click="isOpen = !isOpen">         <!--eslint-disable-line-->
        <p>{{ selectedItem }}</p>
        <img :src="!isOpen ? arrowDown : arrowUp" alt="arrow"/>
      </div>
      <div class="menuItem__subMenu" :class="{ selectHide : !isOpen }">
        <div class="menuItem__subMenu--items" v-for="(item,i) in items" :key="i" @click="selectOption(item)"> <!--eslint-disable-line-->
          <p :class="{ selectedOption : item === selectedItem}">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconUp from '@/assets/ic_arrow_up.svg';
import iconDown from '@/assets/ic_arrow_down.svg';

export default {
  name: 'MyDropdown',
  props: ['items'],
  data() {
    return {
      selectedItem: this.items[0],
      isOpen: false,
      arrowUp: iconUp,
      arrowDown: iconDown,
    };
  },
  methods: {
    selectOption(item) {
      this.selectedItem = item;
      this.isOpen = false;
      let orderBy = ""
      if(item === this.items[0]){
        orderBy = 'ASC'
      }else if(item === this.items[1]) {
        orderBy = 'DESC'
      }
      this.$emit('selectOption',orderBy);
    },

  },
};
</script>

<style lang="scss" scoped>

.selectedOption {
  color: #2a82f0;
}

.selectHide {
  display: none;
}

p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
}

.menuItem {
  background-color: #FFFFFF;
  width: max-content;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  .menuItem__selectedItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 40px;
    padding: 0px 12px;
  }

  .menuItem__subMenu {
    position: absolute;
    background-color: #FFFFFF;
    width: max-content;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    .menuItem__subMenu--items {
      display: flex;
      width: 120px;
      height: 40px;
      align-items: center;
      padding: 0px 12px;
    }

    :hover {
      background-color: rgba(42, 130, 240, 0.1);
    }
  }
}

</style>
