<template>
  <div class="home">
    <h1>This is an home page</h1>
    <button type="button" v-on:click="redirect">Go About</button>
    <shared-element
      ref="sharedElement"
      id="jack123"
      v-bind:duration="300"
      v-bind:zindex="4"
      class="test"
    >
      <button type="button" v-on:click="redirect">Go About</button>
    </shared-element>
  </div>
</template>

<script>
import router from "../router";
import SharedElement from "vue-shared-element";

export default {
  name: "home",
  components: {
    "shared-element": SharedElement,
  },
  methods: {
    redirect: function () {
      console.log("greet");
      this.$refs.sharedElement.redirect(() => {
        router.push({ name: "about" });
      });
    },
  },
};
</script>

<style scoped>
.test {
  width: 100px;
  height: 200px;
  background-color: aquamarine;
  margin-left: 300px;
}
</style>

