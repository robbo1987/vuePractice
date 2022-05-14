<template>
  <q-page padding>
    <input v-model="message" />
    <h5>{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return { message: "i love coding!" };
  },
};
</script>

<style></style>
