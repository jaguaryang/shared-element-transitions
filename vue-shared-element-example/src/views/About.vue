<template>
  <div class="about">
    <h1>This is an about page</h1>
    <shared-element ref="sharedElement" id="jack123" v-bind:duration="500" class="test">
      <div v-on:click="redirect">Go Home</div>
    </shared-element>
  </div>
</template>

<script>
import router from "../router";
import SharedElement from "vue-shared-element";

export default {
  components: {
    "shared-element": SharedElement
  },
  methods: {
    redirect: function() {
      this.$refs.sharedElement.redirect(() => {
        router.push({ name: "home" });
      });
    }
  }
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

