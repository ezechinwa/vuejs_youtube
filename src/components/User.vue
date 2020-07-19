<template>
  <div class="card-holder">
    <h1>The User Component</h1>
    <p>I'm an awesome user</p>
    <input type="text" v-model="name" />

    <button @click="changeName">Change Name</button>

    <div class="card-layout">
      <app-details v-bind:name="name"></app-details>
      <app-edit></app-edit>
    </div>
  </div>
</template>
<script>
import Edit from "../components/Edit";
import Details from "../components/Details";
// import Home from "./Home.vue";

export default {
  components: { "app-edit": Edit, "app-details": Details },

  data: function() {
    return {
      name: "Williams"
    };
  },
  methods: {
    changeName() {
      this.name = "Chinwa";
    }
  }
};
</script>
<style scoped>
.card-holder {
  width: 600px;
  border: 1px solid black;
  background-color: lightblue;
  margin: 0 auto;
  padding: 10px;
}
.card-layout {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
</style>
