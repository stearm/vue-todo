<template>
  <div>
    <span>Total: {{total}}</span>
    <span>Completed: {{completed}}</span>
  </div>
</template>

<script>
  export default {
    props: ['total', 'completed'],
  };
</script>

<style scoped></style>
