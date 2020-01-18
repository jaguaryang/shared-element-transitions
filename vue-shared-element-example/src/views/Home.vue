<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <shared-element id="jack123" v-bind:duration="500" class="test">
      <div>home</div>
    </shared-element>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import SharedElement from "@/components/SharedElement.vue";
import SharedElement from "vue-shared-element";
import HelloWorld from "@/components/HelloWorld.vue";

console.log(SharedElement)

export default {
  name: "home",
  components: {
    HelloWorld,
    'shared-element':SharedElement
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

