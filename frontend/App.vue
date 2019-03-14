<template>
  <section>
    <count :count="count"></count>
    <button @click="handleIncrement">increment</button>
    <button @click="handleDecrement">async decrement</button>
  </section>
</template>

<script>
import Count from "./Count.vue";

export default {
  components: {
    Count
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleIncrement() {
      this.count += 1;
    },
    async handleDecrement() {
      const p = new Promise(resolve => {
        setTimeout(() => {
          resolve(this.count - 1);
        }, 1000);
      });
      const count = await p;
      this.count = count;
    }
  }
};
</script>