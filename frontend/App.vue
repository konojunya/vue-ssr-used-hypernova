<template>
  <section>
    <h1>hello world from vue</h1>
    <p v-if="user">Your name is {{user.name}}</p>
    <button @click="handleClick">ボタンダヨー</button>
  </section>
</template>

<script>
export default {
  props: ["user"],
  mounted() {
    console.log("mountedddddddddddddd");
  },
  methods: {
    handleClick() {
      console.log("hello");
    }
  }
};
</script>