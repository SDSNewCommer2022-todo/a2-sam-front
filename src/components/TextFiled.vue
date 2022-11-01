<template>
  <div class="textField">
    <div class="textField__border"
         v-bind:class="{borderBottom: !isBorder, borderAll: isBorder,borderBlue:isFocusing,borderGray:!isFocusing}">
      <input class='textField__border--inputText' type="text" v-model="nameTodo" :placeholder=myPlaceHolder
             aria-label="이름입력" @focus="isFocusing = true" @blur="isFocusing = false"
             ref="refInput" @keyup.enter="sendName()"/>
      <div v-on:click="inputFocus">        <!--eslint-disable-line-->
        <img v-bind:class='{visible: nameTodo === "",pointerCursor: nameTodo !== ""}' src="../assets/ic_delete.svg" alt="xBtn" v-on:click="clearText"/> <!--eslint-disable-line-->
      </div>
    </div>
    <img class='textField__sendBtn' :src="nameTodo ==='' ? sendNor : sendHov" alt="inputBtn" v-on:click="sendName" :class="{pointerCursor: nameTodo !== ''}"/> <!--eslint-disable-line-->
  </div>
</template>

<script>
import hov from '@/assets/ic_send_hov.svg'
import nor from '@/assets/ic_send_nor.svg'

export default {
  name: 'TextFiled',
  props: ['isBorder'],
  data() {
    return {
      nameTodo: '',
      isFocusing: true,
      myPlaceHolder: '',
      sendHov : hov,
      sendNor : nor
    };
  },
  methods: {
    clearText(){
      this.nameTodo = '';
    },
    inputFocus() {
      this.$refs.refInput.focus();
    },
    sendName() {
        if (this.nameTodo !== '') {
          this.$emit('submit', this.nameTodo);
          this.nameTodo = '';
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
.pointerCursor{
  cursor: pointer;
}
.textField {
  width: 100%;
  height: fit-content;
  display: flex;

  .textField__border {
    display: flex;
    width: calc(100% - 25px);
    height: fit-content;
    align-content: center;

    .textField__border--inputText {
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

  .textField__sendBtn {
    margin-left: 11px;
  }
}

</style>
