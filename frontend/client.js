import Vue from "vue";
import Hypernova from "hypernova";

import App from "./App.vue";

const [payload] = Hypernova.load("App");
if (payload) {
  const {
    node,
    data: props
  } = payload;
  const $vm = new Vue({
    render: (h) => h(App, {
      props
    }, [])
  });
  $vm.$mount(node);
}