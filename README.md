# shared-element-transitions
shared element transitions between routers for React, Vue and Angular. Idea from Hero Animations of Flutter.

# Install

### React

```bash
yarn add react-shared-element
```

### Vue

```bash
yarn add vue-shared-element
```

# Use

Both routes use the SharedElement component and the id must to be the same. It can be a dynamic ID and supports asynchronous.

### React

##### Step1

```bash
import SharedElement from "react-shared-element"
```

##### Step2:

```html
<SharedElement
    ref={this.ref}
    id='shared-id-123'
    style={{ width: 400, height: this.height, backgroundColor: 'red' }}
>
    Content of Component1
</SharedElement>
```

##### Step3:

```html
<div onClick={e => {
    this.ref.current.redirect(() => this.props.history.push("/component2"))
}}>Go Component2</div>
```

### Vue

Step1:

```js
import SharedElement from "vue-shared-element";
```

Step2:

```html
<shared-element ref="sharedElement" id="jack123" v-bind:duration="500" class="test">
    <div v-on:click="redirect">Go Home</div>
</shared-element>
```

Step3:

```js
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
```