<template>
  <div>
    <span>Total: <span class="counter">{{total}}</span></span>
    <span>Completed: <span class="counter">{{completed}}</span></span>
  </div>
</template>

<script>
  export default {
    props: ['total', 'completed'],
  };
</script>

<style scoped>
  .counter {
    font-weight: bold;
  }
</style>
