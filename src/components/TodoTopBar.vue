<template>
  <body>
  <div class="title">
    <img src="../assets/ic_topbar_menu.svg" alt="topbarIcon"/>
    <span>Sam-ToDo</span>
  </div>
  <div class="date">{{ date }}</div>
  </body>
</template>

<script>
export default {
  data() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const dateArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return { date: `${month}/${date} ${dateArr[today.getDay()]}` };
  },
};
</script>

<style lang="scss" scoped>
body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
  gap: 530px;
  height: 48px;
  left: 0px;
  top: 0px;
  background: #6C77A7;

  .title {
    display: flex;
    justify-content: space-around;
    width: 160px;
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
