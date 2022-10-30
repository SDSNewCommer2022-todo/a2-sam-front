<template>
  <div class="container">
  <div class="title">
    <img class="icon" src="../assets/ic_topbar_menu.svg" alt="topbarIcon"/>
    <span>{{name}}-ToDo</span>
  </div>
  <div class="date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props : ["name"],
  methods: {
    getDate() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const date = today.getDate();
      const dateArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return `${month}/${date} ${dateArr[today.getDay()-1]}`;
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
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  gap: 530px;
  height: 48px;
  left: 0px;
  top: 0px;
  background: #6C77A7;

  .title {
    display: flex;
    justify-content: space-around;
    width: auto;
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
    .icon{
      margin-right: 13px;
    }
  }

  .date {
    width: auto;
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
