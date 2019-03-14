<template>
  <section>
    <h1>hello from vue</h1>
    <p v-if="user">Your name is {{user.name}}</p>
    <button @click="handleClick">ボタン</button>
  </section>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    handleClick() {
      console.log("hello");
    }
  }
};
</script>