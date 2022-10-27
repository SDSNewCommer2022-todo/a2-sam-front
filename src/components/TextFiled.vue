<template>
  <div class="textField">
    <div class="textFieldBorder"
         v-bind:class="{borderBottom: !isBorder, borderAll: isBorder,borderBlue:isFocusing,borderGray:!isFocusing}">
      <input class='inputText' type="text" v-model="nameTodo" placeholder="input your name"
             aria-label="이름입력" @focus="isFocusing = true" @blur="isFocusing = false"
             ref="refInput" @keyup.enter="sendName()"/>
      <div v-on:click="inputFocus">        <!--eslint-disable-line-->
        <img v-bind:class='{visible: nameTodo === ""}' class="clearBtn" src="../assets/ic_delete.svg" alt="xBtn"/> <!--eslint-disable-line-->
      </div>
    </div>
    <img class='sendBtn' id='btnId' ref="sendBtn" src="../assets/ic_send_nor.svg" alt="inputBtn" v-on:click="sendName"/> <!--eslint-disable-line-->

  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TextFiled',
  data() {
    return {
      nameTodo: '',
      tmpName : '',
      isBorder: false,
      isFocusing: true
    };
  },
  methods: {
    ...mapMutations({
      saveName: 'saveName',
    }),
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
        this.tmpName = this.nameTodo;
        this.nameTodo = '';
      }
    },
    inputFocus() {
      this.$refs.refInput.focus();
    },
    sendName() {
      if (this.tmpName !== '') {
        this.saveName(this.tmpName);
        this.$router.push('/todo');
      }
      if (this.nameTodo !== ''){
        this.saveName(this.nameTodo);
        this.$router.push('/todo');
      }
    }
  },
  watch: {
    nameTodo() {
      this.questionFunc();

    },
    isFocusing() {
      this.focusFunc();
    }
  },
  mounted() {
    this.inputFocus();
  }

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
