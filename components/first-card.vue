<template>
  <article class="card">
    <h1>
      {{ title }}
      <small>{{ subtitle }}</small>
    </h1>
    <div class="image-box">
      <img :src="`${image.url}&fit=crop&w=720&h=720`" :alt="image.alt" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'FirstCard',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
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
