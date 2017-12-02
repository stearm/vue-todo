<template>
  <div v-bind:class="{ completed : complete }">{{text}}</div>  
</template>

<script>
export default {
  name: 'Item',
  props: ['text', 'complete'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
