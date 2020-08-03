<template>
  <section>
    <header class="p-4">
      <p class="text-3xl">Quote Added</p>
      <k-progress
        :percent="getPercentage"
        :line-height="20"
        :border="false"
        :flow-second="6"
        :active="true"
      ></k-progress>
    </header>

    <div v-for="(error,index) in errors" :key="index">
      <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 m-4" role="alert">
        <p class="font-bold">{{error.title}}</p>
        <p>{{error.message}}</p>
      </div>
    </div>

    <content class="flex justify-center p-4 flex-col items-center">
      <div class="self-start text-gray-700 text-xl px-4 py-2 m-2">Quote</div>
      <textarea
        class="border resize-none rounded focus:outline-none focus:shadow-outline p-4 m-3 w-full"
        placeholder="Message ..."
        rows="10"
        v-model="newquote"
      ></textarea>
      <button
        @click="addQuote"
        class="bg-blue-500 w-4 hover:bg-blue-700 w-auto text-white font-bold py-2 px-4 m-3 border border-blue-700 rounded"
      >Add</button>
    </content>

    <app-cards>
      <div class="flex space-x-4 p-4 border-2">
        <div v-for="(quote,index) in quotes" :key="index">
          <app-cards class="p-8 border-2" v-on:delete="deleteQuote(index)">
            <h1>{{quote}}</h1>
          </app-cards>
        </div>
      </div>
    </app-cards>
    {{newquote}}
  </section>
</template>

<script>
import Cards from "../components/Cards";
export default {
  components: {
    "app-cards": Cards,
  },
  data: function () {
    return {
      newquote: "",
      quotes: [23, 22, 33],
      errors: [],
    };
  },
  methods: {
    deleteQuote: function (index) {
      if (index >= 0) {
        var temp = [...this.quotes];
        temp.splice(index, 1);
        this.quotes = temp;
      }
    },
    addQuote: function () {
      //   if (this.newquote != "" && this.quotes.length < 10) {
      //     this.quotes.push(this.newquote);
      //   } else {
      //     console.log("quote is empty ");
      //   }
      //   this.newquote = "";

      if (this.newquote == "") {
        this.errors.push({
          title: "",
          message: "Quote cannot be empty ",
        });
      }

      if (this.quotes.length == 10) {
        this.errors.push({
          title: "",
          message: "Quotes are filled up, delete some",
        });
      }

      if (this.newquote != "" && this.quotes.length < 10) {
        this.errors = [];
        this.quotes.push(this.newquote);
        this.newquote = "";
      }
    },
  },
  computed: {
    // a computed getter
    getPercentage: function () {
      return this.quotes.length * 10;
    },
  },
};
</script>

<style scoped>
</style>