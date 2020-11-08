<template>
  <article class="card">
    <h1>{{ post.title }}</h1>
    <!-- eslint-disable vue/no-v-html -->
    <div class="post-body" v-html="post.body"></div>
    <!--eslint-enable-->
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: { type: Object, required: true },
  },
};
</script>
