# shared-element-transitions 

[English](./README.md) | 简体中文

> 单页面应用程序跨组件的动画，在路由的过程中，从一个组件飞到另外一个组件。用于React，Vue，Angular和Web应用程序的路由器之间的共享元素转换。 思路来自于Flutter的Hero动画和其他Android移动应用程序。

# 安装

### React

```jsx
yarn add react-shared-element
```

### Vue

```jsx
yarn add vue-shared-element
```

# 使用

两条路由的组件都使用SharedElement包装，并且ID必须相同。 它可以是动态ID，并支持异步加载。

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

##### Step1:

```jsx
import SharedElement from "vue-shared-element"
```

##### Step2:

```html
<shared-element ref="sharedElement" id="shared-id-123">
    <div v-on:click="redirect">Go Home</div>
</shared-element>
```

##### Step3:

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
      this.$refs.sharedElement.redirect(() => router.push({ name: "home" }))
    }
  }
}
</script>
```

# 参数

| name       | type     | default | required |
|------------|----------|---------|--|
| `id`       | *string* | null    | **required** |
| `duration` | *number* | 300     | optional
| `zindex`   | *number* | 1       | optional




请享用!