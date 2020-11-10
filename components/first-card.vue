<template>
  <article class="card">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <div class="image-box">
      <img :src="image" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'FirstCard',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0.4rem;
}

.image-box {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
}

img {
  max-width: 15rem;
}
</style>
