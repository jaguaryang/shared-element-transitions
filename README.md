# shared-element-transitions
shared element transitions between routers for React, Vue and Angular

Install:

React:

yarn add react-shared-element-transitions

Vue:

yarn add vue-shared-element-transitions

Use:

React:

Step1:
import SharedElement from "react-shared-element"

Step2:
this.ref = React.createRef()

Step3:
<SharedElement
    ref={this.ref}
    id='shared-id-123'
    style={{ width: 400, height: this.height, backgroundColor: 'red' }}
>
    Content of Component1
</SharedElement>

Step4:
<div onClick={e => {
    this.ref.current.redirect(() => this.props.history.push("/component2"))
}}>Go Component2</div>


Vue:

Step1:
import SharedElement from "vue-shared-element";

Step2:
<shared-element ref="sharedElement" id="jack123" v-bind:duration="500" class="test">
    <div v-on:click="redirect">Go Home</div>
</shared-element>

Step3:
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