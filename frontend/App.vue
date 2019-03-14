<template>
  <section>
    <h1>hello world from vue</h1>
    <p v-if="user">Your name is {{user.name}}</p>
  </section>
</template>

<script>
export default {
  props: ["user"]
};
</script>