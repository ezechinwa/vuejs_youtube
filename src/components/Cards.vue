<template>
  <section v-on:click="$emit('delete')">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scope>
</style>