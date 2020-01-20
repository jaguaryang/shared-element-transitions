# shared-element-transitions
shared element transitions between routers for React, Vue and Angular. Idea from Hero Animations of Flutter.

# Install

### React

```jsx
yarn add react-shared-element
```

### Vue

```jsx
yarn add vue-shared-element
```

# Use

Both routes use the SharedElement component and the id must to be the same. It can be a dynamic id and supports asynchronous.

### React

##### Step1:

```jsx
import SharedElement from "react-shared-element"
```

##### Step2:

```html
<SharedElement ref={this.ref} id='shared-id-123'>
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

```jsx
import SharedElement from "vue-shared-element"
```

Step2:

```html
<shared-element ref="sharedElement" id="shared-id-123">
    <div v-on:click="redirect">Go Home</div>
</shared-element>
```

Step3:

```jsx
<script>
import router from "../router"
import SharedElement from "vue-shared-element"

export default {
  components: {
    "shared-element": SharedElement
  },
  methods: {
    redirect: function() {
      this.$refs.sharedElement.redirect(() => {
        router.push({ name: "home" })
      })
    }
  }
}
</script>
```

Enjoy coding!