<template>
  <div>
    <label for="text" /> New item:&nbsp;
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

<style scoped></style>
