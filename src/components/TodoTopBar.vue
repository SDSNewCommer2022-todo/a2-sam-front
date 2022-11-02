<template>
  <div class="TodoTopBar">
    <div class="TodoTopBar__title">
      <img class="TodoTopBar__title--icon" src="../assets/ic_topbar_menu.svg" alt="topbarIcon"/>
      <span>{{ name }}-ToDo</span>
    </div>
    <div class="TodoTopBar__date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    getDate() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const date = today.getDate();
      const dateArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return `${month}/${date} ${dateArr[today.getDay() - 1]}`;
    }
  },
  data() {
    return { date: '' };
  },
  created() {
    this.date = this.getDate();
  }

};
</script>

<style lang="scss" scoped>
.TodoTopBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 48px;
  background: #6C77A7;

  .TodoTopBar__title {
    justify-content: space-around;
    height: 28px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;

    .TodoTopBar__title--icon {
      margin-right: 13px;
    }
  }

  .TodoTopBar__date {
    height: 19px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

}

</style>
