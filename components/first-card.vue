<template>
  <article class="card">
    <div>
      <h1>{{ post.title }}</h1>
      <h2 v-if="post.subtitle">{{ post.subtitle }}</h2>
      <img v-if="post.image" :src="post.image" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'FirstCard',
  props: {
    post: { type: Object, required: true },
  },
};
</script>
