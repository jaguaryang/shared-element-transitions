<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <SharedElement id="jack123" v-bind:duration="500" class="test">
      <div>home</div>
    </SharedElement>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import SharedElement from "@/components/SharedElement.vue";
import SharedElement from "vue-shared-element";

export default {
  name: "home",
  components: {
    HelloWorld,
    SharedElement
  }
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

