import Vue from "vue";
import Hypernova from "hypernova";
import server from "hypernova/server";
import {
  createRenderer
} from "vue-server-renderer";

import App from "./App.vue";

const renderer = createRenderer();

server({
  devMode: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 5000,
  getComponent: (name) => {
    return async (props) => {
      const $vm = new Vue({
        render: (h) => h(App, {
          props
        }, [])
      });
      const html = await renderer.renderToString($vm);
      return Hypernova.serialize(name, html, props);
    }
  }
})