<template>
  <div>
    <label for="text">New item:&nbsp;</label>
    <input id="text" type="text" v-model="text" />
    <button v-on:click="addAndClear(text)" :disabled="text.length === 0">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addAndClear(text) {
      this.add(text);
      this.text = '';
    },
  },
  props: ['add'],
};
</script>

<style scoped>
  button {
    background-color: transparent;
    color: #47b784;
    border: 2px solid #47b784;
    font-size: 14px;
    cursor: pointer;
  }
  button:hover:enabled {
    color: #fff;
    background-color: #47b784;
    transition: color .2s linear, background-color .2s linear;
  }
  button:disabled {
    color: #9ea5af;
    border-color: #9ea5af;
  }
</style>
