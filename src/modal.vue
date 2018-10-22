<template>
  <div class="modal" v-if="modalState" v-on:click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header" :class="{'model-header-dark' : header}">
        <div v-if="header">{{header}}</div>
        <div class="modal-close" @click="closeModal()">X</div>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['state', 'header'],
  computed: {
    modalState() { return this.state }
  },
  methods: {
    closeModal() {
      this.$emit('clicked', null)
    },
  },

}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .4);
  }

  .modal-container {
    background-color: white;
    width: 90%;
    max-width: 600px;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2rem;
    padding: 0 1rem;

    &.model-header-dark {
      background-color: black;
      color: white;
    }
  }

  .modal-close {
    margin-left: auto;
  }

  .modal-content {
    padding: 1rem;
  }
</style>
