<template>
  <div class="textField">
    <div class="textFieldBorder"
         v-bind:class="{borderBottom: !isBorder, borderAll: isBorder,borderBlue:isFocusing,borderGray:!isFocusing}">
      <input class='inputText' type="text" v-model="nameTodo" :placeholder=myPlaceHolder
             aria-label="이름입력" @focus="isFocusing = true" @blur="isFocusing = false"
             ref="refInput" @keyup.enter="sendName()"/>
      <div v-on:click="inputFocus">        <!--eslint-disable-line-->
        <img v-bind:class='{visible: nameTodo === ""}' ref ="clearBtn" class="clearBtn" src="../assets/ic_delete.svg" alt="xBtn" v-on:click="clearText"/> <!--eslint-disable-line-->
      </div>
    </div>
    <img class='sendBtn' id='btnId' ref="sendBtn" src="../assets/ic_send_nor.svg" alt="inputBtn" v-on:click="sendName"/> <!--eslint-disable-line-->

  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TextFiled',
  props: ['isBorder'],
  data() {
    return {
      nameTodo: '',
      isFocusing: true,
      myPlaceHolder: ''
    };
  },
  methods: {
    ...mapMutations({
      saveName: 'saveContent',
    }),
    clearText(){
      this.nameTodo = '';
    },
    questionFunc() {
      if (this.nameTodo.length > 0) {
        const sendHov = require('../assets/ic_send_hov.svg'); // eslint-disable-line global-require
        this.$refs.sendBtn.src = sendHov;
        this.$refs.sendBtn.style.cursor = "pointer";
        this.$refs.clearBtn.style.cursor = "pointer";
      } else if (this.nameTodo.length === 0) {
        const sendNor = require('../assets/ic_send_nor.svg'); // eslint-disable-line global-require
        this.$refs.sendBtn.src = sendNor;
        this.$refs.sendBtn.style.cursor = "default";
        this.$refs.clearBtn.style.cursor = "default";

      }
    },
    focusFunc() {
      if (!this.isFocusing) {
        if(this.nameTodo === ''){
          this.nameTodo = '';
        }
      }
    },
    inputFocus() {
      this.$refs.refInput.focus();
    },
    sendName() {
      if (this.isBorder) {
        if (this.nameTodo !== '') {
          this.$emit('submit', this.nameTodo);
          this.nameTodo = '';
        }

      } else if(!this.isBorder) {
        if (this.nameTodo !== '') {
          this.saveName(this.nameTodo);
          this.$router.push('/todo');
        }
      }
    },
    getPlaceHolder() {
      let text = 'Input your name';
      if (this.isBorder) {
        text = 'Enter your task';
      }
      return text;
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
    if (!this.isBorder) {
      this.inputFocus();
    }
    this.myPlaceHolder = this.getPlaceHolder();
  }

};
</script>

<style lang="scss" scoped>
.visible {
  visibility: hidden;
}

.borderBottom {
  border-bottom: 1px solid;
  padding: 4px;
}

.borderAll {
  padding: 12px;
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
      background: transparent;
      font-size: 16px;
    }

    input:focus::placeholder {
      color: transparent;
    }

    input::placeholder {
      color: #CCCCCC;
    }

  }

  .sendBtn {
    margin-left: 11px;
  }
}

</style>
