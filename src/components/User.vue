<template>
  <div class="card-holder">
    <h1>The User Component</h1>
    <p>I'm an awesome user</p>
    <input type="text" v-model="name" />

    <button @click="changeName">Change Name</button>

    <div class="card-layout">
      <app-details @resetName="name = $event">
        <p slot="name">{{name}}</p>
      </app-details>
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

  data: function () {
    return {
      name: "Williams",
      a: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Chinwa";
    },
  },

  created: function () {
    // `this` points to the vm instance
    let v = this.a + 1;
    console.log("created: a was: " + this.a + " changed to " + v);
    this.a++;
  },

  beforeCreate: function () {
    let v = this.a + 1;
    console.log("beforeCreate: a was: " + this.a + " changed to " + v);
    this.a++;
  },
  beforeMount: function () {
    let v = this.a + 1;
    console.log("beforeMount: a was: " + this.a + " changed to " + v);
    this.a++;
  },
  mounted: function () {
    let v = this.a + 1;
    console.log("mounted: a was: " + this.a + " changed to " + v);
    this.a++;
  },

  beforeUpdate: function () {
    let v = this.a + 1;
    console.log("beforeUpdate: a was: " + this.a + " changed to " + v);
    this.a++;
  },
  updated: function () {
    let v = this.a + 1;
    console.log("updated: a was: " + this.a + " changed to " + v);
    this.a++;
  },
  beforeDestroy: function () {
    let v = this.a + 1;
    console.log("beforeDestroy: a was: " + this.a + " changed to " + v);
    this.a++;
  },
  destroyed: function () {
    let v = this.a + 1;
    console.log("destroyed: a was: " + this.a + " changed to " + v);
    this.a++;
  },
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
