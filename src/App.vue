<template>
  <div class="card-holder">
    <app-user></app-user>
  </div>
</template>
<script>
import User from "../src/components/User";

export default {
  components: { "app-user": User },

  data: function() {
    return {};
  }
};
</script>
<style scoped>
</style>
