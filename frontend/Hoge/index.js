import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      foo: 1
    }
  },
  methods: {
    countup() {
      console.log("countup")
      this.foo += 1;
    }
  }
})