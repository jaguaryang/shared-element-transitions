// import Vue from 'vue'
// import App from './App.vue'
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

import SharedElement from './components/SharedElement.vue';

SharedElement.install = Vue => Vue.component(SharedElement.name, SharedElement);

export default SharedElement;