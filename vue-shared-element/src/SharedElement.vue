<template>
  <div v-bind:id="id">
    <slot />
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "shared-element",
  props: {
    id: String,
    duration: {
      type: Number,
      default: 300
    },
    transitionStart: Function,
    transitionEnd: Function
  },
  data() {
    return {
      test: 123
    };
  },
  methods: {
    transition: function() {
      // debugger
      if (!this.id) return;

      let id_common = this.id + "-common";
      let node = document.getElementById(id_common);
      if (!node) {
        this.visible(true);
        return;
      }
      node.style.display = "block";
      this.visible(false);

      if (this.transitionStart) {
        this.transitionStart();
      }

      let current = document.getElementById(this.id);
      html2canvas(current, { scale: 1 }).then(canvas => {
        let rect = current.getBoundingClientRect();
        node.style.top = rect.top + "px";
        node.style.left = rect.left + "px";
        node.style.width = canvas.width + "px";
        node.style.height = canvas.height + "px";
        node.style.background = "url(" + canvas.toDataURL() + ")";
        setTimeout(() => {
          node.remove();
          if (this.transitionEnd) {
            this.transitionEnd();
          }
          this.visible(true);
        }, this.duration);
      });
    },
    redirect: function(callback) {
      let id_common = this.id + "-common";
      let node = document.getElementById(id_common);
      if (node) {
        node.remove();
      }

      node = document.createElement("DIV");
      node.setAttribute(
        "style",
        "display: none; position: absolute; background-size: 100% 100%; transition: all " +
          this.duration / 1000 +
          "s;"
      );
      node.id = id_common;
      document.body.appendChild(node);

      let current = document.getElementById(this.id);
      html2canvas(current, { scale: 1 }).then(canvas => {
        let rect = current.getBoundingClientRect();
        node.style.top = rect.top + "px";
        node.style.left = rect.left + "px";
        node.style.width = canvas.width + "px";
        node.style.height = canvas.height + "px";
        node.style.background = "url(" + canvas.toDataURL() + ")";
        if (callback) callback()
      });
    },
    visible: function(bol) {
      let current = document.getElementById(this.id);
      current.parentNode.style.opacity = bol ? 1 : 0;
    }
  }, // end of methods
  beforeCreate() {
    // console.log("beforeCreate");
  },
  created() {
    // console.log("created");
  },
  beforeMount() {
    // console.log("beforeMount");
  },
  mounted() {
    // console.log("mounted");
    this.transition();
    setTimeout(() => {}, 100);
  },
  updated() {
    // console.log("updated");
  }
};
</script>

<style scoped>
</style>
