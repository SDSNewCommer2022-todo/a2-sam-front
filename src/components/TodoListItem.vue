<!--eslint-disable-->
<template>
  <div class="listItem" :class="{ borderAll : isFocusing}">
    <div v-if="!isEdit" class="notEdit">
      <div class="listItem__left">
        <MyCheckBox class="listItem__left--checkbox" :isChecked="isChecked" @check="check">
        </MyCheckBox>
      </div>
      <div class="listItem__center" @click="editMode">
        <div class="listItem__center--content" :class="{textDeco : isChecked}">
          <p>{{ todo.content }}</p>
        </div>
        <p class="listItem__center--date">
          {{ todo.createdDate.substr(5, 2) + '/' + todo.createdDate.substr(8, 2) }}
        </p>
      </div>
      <div class="listItem__right">
        <img :src="isHover ? removeHov : removeNor" @click="updateDelStatus"
             @mouseover="isHover = true" @mouseleave="isHover = false" alt="removebtn"
             class="listItem__right--removeIcon"/>
      </div>
    </div>
    <div v-else class="edit">
      <div class="listItem__container">
        <input type="text" class="listItem__container--textFiled" v-model="textContent"
               @focusin="isFocusing = true" @blur='blurInput' @keyup.enter="updateContent"
               placeholder="Enter your task" autofocus>
        <img :src="textContent === '' ? sendNor : sendHov" @click="updateContent" alt="sendIcon"
             :class="{pointerCursor : textContent !== ''}">
      </div>
    </div>
  </div>
</template>

<script>
import removeNorIcon from '../assets/btn_remove_nor.svg';
import removeHovIcon from '../assets/btn_remove_hov.svg';
import MyCheckBox from './MyCheckBox.vue';
import sendHovIcon from '../assets/ic_send_hov.svg';
import sendNorIcon from '../assets/ic_send_nor.svg';

export default {
  name: 'TodoListItem',
  components: {
    'MyCheckBox': MyCheckBox
  },
  props: ['todo', 'index'],
  data() {
    return {
      removeNor: removeNorIcon,
      removeHov: removeHovIcon,
      isChecked: this.todo.status === 'COMPLETED',
      isEdit: false,
      textContent: '',
      sendHov: sendHovIcon,
      sendNor: sendNorIcon,
      isFocusing: false,
      isHover: false,
    };
  },
  /*eslint-disable*/
  methods: {
    check() {
      if (this.isChecked) {
        this.todo.status = 'REGISTERED';
      } else if (!this.isChecked) {
        this.todo.status = 'COMPLETED';
      }
      this.isChecked = !this.isChecked;
      this.$emit('updateTask', this.todo);
    },
    editMode() {
      if (!this.isChecked) {
        this.isEdit = true;
        this.textContent = this.todo.content;
      }
    },
    updateContent() {
      if (this.textContent !== '') {
        this.todo.content = this.textContent;
        this.isEdit = false;
        this.$emit('updateTask', this.todo);

      } else if (this.textContent === '') {
        this.$refs.refInput.focus();
      }
    },
    blurInput() {
      this.isFocusing = false;
      if (this.textContent !== '') {
        this.todo.content = this.textContent;
        this.isEdit = false;
        this.$emit('updateTask', this.todo);

      }
    },
    updateDelStatus() {
      this.$emit('deleteTask', this.todo.id);
    }
  },

};
</script>

<style lang="scss" scoped>
.borderAll {
  border: 1px solid #2a82f0;
  border-radius: 5px;
}

.pointerCursor {
  cursor: pointer;
}

.listItem {
  display: flex;
  padding: 18px 16px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 8px;

  .notEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    width: 100%;

    .listItem__left {
      display: flex;
      align-items: center;

      .listItem__left--checkbox {
        display: flex;
        align-items: center;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .listItem__center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;

      &:hover {
        cursor: text;
      }

      .listItem__center--content {
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        padding-left: 16px;

        &.textDeco {
          text-decoration-line: line-through;
          opacity: 0.6;
        }
      }

      .listItem__center--date {
        display: flex;
        color: #000000;
        opacity: 0.6;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        padding-right: 12px;
      }

    }

    .listItem__right {
      display: flex;
      align-items: center;

      .listItem__right--removeIcon {
        display: flex;

        &:hover {
          cursor: pointer;
          background: url("~/src/assets/btn_remove_hov.svg") no-repeat;
        }
      }
    }
  }

  .edit {
    display: flex;
    align-items: center;
    width: 100%;

    .listItem__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .listItem__container--textFiled {
        width: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        background: transparent;

        &::placeholder {
          color: #CCCCCC;
        }
      }
    }
  }
}
</style>
