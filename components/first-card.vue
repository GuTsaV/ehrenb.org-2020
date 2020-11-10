<template>
  <article class="card">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <div class="image-box">
      <img
        :src="`${image.url}?auto=compress,format&fit=crop&w=720&h=720`"
        :alt="image.alt"
      />
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
