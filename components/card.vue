<template>
  <article class="card">
    <nuxt-link v-if="post.uid" :to="`/posts/${post.uid}`">
      <h1>{{ post.title }}</h1>
      <img
        v-if="post.image"
        :src="`${post.image.url}?auto=compress,format&fit=crop&w=400&h=100`"
        :alt="post.image.alt"
      />
    </nuxt-link>
    <!-- eslint-disable vue/no-v-html -->
    <div class="post-body" v-html="post.body"></div>
    <!--eslint-enable-->
    <nuxt-link v-if="post.uid" class="read-more" :to="`/posts/${post.uid}`"
      >Read more…</nuxt-link
    >
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

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
}

.read-more {
  float: right;
  margin-right: 10%;
}
</style>
