<template>
  <div>
    <h1>This is an about page</h1>
    <button type="button" v-on:click="redirect">Go Home</button>
    <shared-element
      ref="sharedElement"
      id="jack123"
      v-bind:duration="300"
      v-bind:zindex="4"
      class="test"
    >
      <button type="button" v-on:click="redirect">Go Home</button>
    </shared-element>
  </div>
</template>

<script>
import router from "../router";
import SharedElement from "vue-shared-element";

export default {
  components: {
    "shared-element": SharedElement,
  },
  methods: {
    redirect: function () {
      this.$refs.sharedElement.redirect(() => {
        router.push({ name: "home" });
      });
    },
  },
};
</script>

<style scoped>
.test {
  width: 400px;
  height: 100px;
  background-color: brown;
  margin-left: 500px;
}
</style>

