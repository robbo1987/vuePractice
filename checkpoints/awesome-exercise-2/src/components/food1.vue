<template>
  <div class="card shadow-1">
    <img :src="food.imageUrl" width="198" height="180" />
    <div class="card-content">
      <h1 class="text-primary">{{ food.name }}</h1>
      <p>{{ food.description }}</p>
    </div>
    <p>
      <small>
        <b>Delicousness:</b>
      </small>
      <b class="text-primary">
        {{ food.deliciousness }}
      </b>
    </p>
  </div>
</template>

<script>
export default {
  props: ["food"]
};
</script>
