import Vue from "vue";
import Hypernova from "hypernova";
import {
  routes
} from "./routes";

/**
 * renderer
 * Vueのコンポーネントをlocationによって切り替える
 */
const renderer = (routes) => {
  const route = routes.find(route => route.path === location.pathname);
  const [payload] = Hypernova.load(route.load);
  if (payload) {
    const {
      node,
      data: props
    } = payload;
    const $vm = new Vue({
      render: (h) => h(route.component, {
        props
      }, [])
    });
    $vm.$mount(node);
  }
}

renderer(routes);