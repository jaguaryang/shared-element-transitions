<template>
  <div id="app">
    <SharedElement id="shared123" v-bind:duration="300">Slot by Jack</SharedElement>
  </div>
</template>

<script>
import SharedElement from "./components/SharedElement.vue";

export default {
  name: "app",
  components: {
    SharedElement
  }
};
</script>

<style scoped>
</style>
