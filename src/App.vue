<template>
  <div>
    <div class="container mx-auto mt-3">
      <app-quotes-layout></app-quotes-layout>
    </div>
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
