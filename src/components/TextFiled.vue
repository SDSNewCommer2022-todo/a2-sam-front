<template>
  <div class="textField">
    <div class="textFieldBorder"
         v-bind:class="{borderBottom: !isBorder, borderAll: isBorder,borderBlue:isFocusing,borderGray:!isFocusing}">
      <input class='inputText' type="text" v-model="nameTodo" placeholder="input your name"
             aria-label="이름입력" @focus="isFocusing = true" @blur="isFocusing = false"
             ref="refInput"/>
      <div v-on:click="clearText">        <!--eslint-disable-line-->
        <img v-bind:class='{visible: nameTodo === ""}' class="clearBtn" src="../assets/ic_delete.svg" alt="xBtn" v-on:click="clearText"/> <!--eslint-disable-line-->
      </div>

    </div>
    <img class='sendBtn' id='btnId' ref="sendBtn" src="../assets/ic_send_nor.svg" alt="inputBtn"/>

  </div>
</template>

<script>

export default {
  name: 'TextFiled',
  data() {
    return {
      nameTodo: '',
      isBorder: false,
      isFocusing: true
    };
  },
  methods: {
    questionFunc() {
      if (this.nameTodo.length > 0) {
        const sendHov = require('../assets/ic_send_hov.svg'); // eslint-disable-line global-require
        this.$refs.sendBtn.src = sendHov;
      } else if (this.nameTodo.length === 0) {
        const sendNor = require('../assets/ic_send_nor.svg'); // eslint-disable-line global-require
        this.$refs.sendBtn.src = sendNor;
      }
    },
    focusFunc() {
      if (!this.isFocusing) {
        this.nameTodo = '';
      }
    },
    inputFocus() {
      this.$refs.refInput.focus();
    },
    clearText() {
      this.inputFocus();
    },
  },
  watch: {
    nameTodo() {
      this.questionFunc();
    },
    isFocusing() {
      this.focusFunc();
    }
  },

};
</script>

<style lang="scss" scoped>
.visible {
  visibility: hidden;
}

.borderBottom {
  border-bottom: 1px solid;
}

.borderAll {
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
}

.borderBlue {
  border-color: #2a82f0;
}

.borderGray {
  border-color: #CCCCCC;
}

.textField {
  width: 100%;
  height: fit-content;
  display: flex;

  .textFieldBorder {
    display: flex;
    width: 100%;
    height: fit-content;
    align-content: center;

    .inputText {
      width: calc(100% - 25px);
      height: auto;
      outline: none;
      border: none;
      margin: 5px;
      background: transparent;
    }

    input:focus::placeholder {
      color: transparent;
    }
  }

  .sendBtn {
    margin-left: 11px;
  }
}

</style>
