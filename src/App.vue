<template lang="html">
  <div class="modal" :class="[{active : state}, modalClass]" v-on:click.self="closeModal">
    <div class="modal-container">
      <header class="modal-header" :class="{'no-header' : headerless}">
        <slot name="header" v-if="!headerless"></slot>
        <div class="modal-close" @click="closeModal()">X</div>
      </header>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['state', 'headerless', 'modalClass'],
  data: () => {
    return {
      modalState: null
    }
  },
  methods: {
    closeModal() {
      this.modalState = null
      this.$emit('clicked', this.modalState)
      document.querySelector('body').classList.remove('_lock')
    },
  },
  mounted() {
    this.modalState = this.state
    document.querySelector('body').classList.add('_lock')
  },
}
</script>

<style lang="scss" scoped>
$white: #fff;
$black: #231f20;

@mixin tablet {
  @media all and (min-width: 37.5rem) {
    @content;
  }
}

@mixin desktop {
  @media all and (min-width: 62.5rem) {
    @content;
  }
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $white;
  overflow: scroll;
  z-index: 10;
  grid-template-columns: 1fr;

  &.active {
    display: grid;
  }

  @include tablet {
    align-content: center;
    background-color: rgba($black, .4);

    &._large {
      align-content: flex-start;
      .modal-container {
        max-width: 800px;
      }
    }
  }
}

.modal-container {
  @include tablet {
    position: relative;
    width: 90%;
    max-width: 450px;
    margin: 3rem auto;
    border-radius: 3px;
    background-color: $white;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2rem;
  padding: 0 1rem;
  background-color: $black;
  color: $white;

  &.no-header {
    background-color: transparent;
    color: inherit;
  }
}

.modal-close {
  margin-left: auto;
  font-size: 16px;
  cursor: pointer;
}
</style>
