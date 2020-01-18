<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SharedElement id="jack123" v-bind:duration="500" class="test">about</SharedElement>
  </div>
</template>

<script>
// @ is an alias to /src
import SharedElement from "@/components/SharedElement.vue";

export default {
  components: {
    SharedElement
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

