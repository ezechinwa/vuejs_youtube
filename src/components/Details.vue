<template>
  <div class="card-details">
    <h1>View the user details</h1>

    <slot name="name"></slot>
    <!-- <p>UserName: {{name}}</p> -->

    <p>
      <button @click="resetName">Reset Name</button>
    </p>
    <small>Simulating child to parent communication</small>
  </div>
</template>

<script>
export default {
  // props: ["name"],
  data: function () {
    return {
      test: "",
    };
  },
  methods: {
    resetName() {
      this.$emit("resetName", this.test);
    },
  },
};
</script>

<style scoped>
.card-details {
  border: 1px solid black;
  padding: 25px;
  background-color: darksalmon;
  margin: 10px;
}
</style>