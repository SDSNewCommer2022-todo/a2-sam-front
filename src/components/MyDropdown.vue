<template>
  <div>
    <div class="menu-item" :tabindex="-1" @blur="open = false">
      <div class="selectedItem" @click="open = !open">        <!--eslint-disable-line-->
        <p>{{ selectedItem }}</p>
        <img ref="arrowIcon" src="../assets/ic_arrow_down.svg" alt="arrow"/>
      </div>
      <div class="sub-menu" :class="{ selectHide : !open }">
        <div class="items" v-for="(item,i) in items" :key="i" @click="selectOption(item)"> <!--eslint-disable-line-->
          <p :class="{ selectedOption : item === selectedItem}">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MyDropdown',
  props: ['items'],
  data() {
    return {
      selectedItem: this.items[0],
      open: false,
    };
  },
  methods: {
    selectOption(item) {
      this.selectedItem = item;
      this.open = false;
    },
    changeIcon() {
      if (!this.open) {
        this.$refs.arrowIcon.src = require('../assets/ic_arrow_down.svg');// eslint-disable-line global-require
      } else {
        this.$refs.arrowIcon.src = require('../assets/ic_arrow_up.svg');// eslint-disable-line global-require
      }
    }

  },
  watch: {
    open() {
      this.changeIcon();
    }
  }
};
</script>

<style lang="scss" scoped>

.open {
}

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

.menu-item {
  background-color: #FFFFFF;
  width: max-content;
  height: max-content;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  .selectedItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 40px;
    padding: 0px 12px;
  }

  .sub-menu {
    .items {
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
