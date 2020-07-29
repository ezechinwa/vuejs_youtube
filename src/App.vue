<template>
  <div class="card-holder">
    <app-quotes-layout></app-quotes-layout>
  </div>
</template>
<script>
import Quotes from "../src/components/Quotes";

export default {
  components: { "app-quotes-layout": Quotes },

  data: function () {
    return {};
  },
};
</script>
<style scoped>
</style>
