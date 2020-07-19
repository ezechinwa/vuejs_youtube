<template>
  <div class="card-details">
    <h1>View the user details</h1>
    <p>UserName: {{name}}</p>
  </div>
</template>

<script>
export default {
  props: ["name"]
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