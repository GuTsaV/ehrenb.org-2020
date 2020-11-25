<template>
  <div class="card-holder">
    <card v-for="post in posts" :key="post.uid" :post="post"></card>
    <empty-card></empty-card>
    <empty-card></empty-card>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { getPosts } = await import(
      /* webpackChunkName: "queries-get-posts" */ '@/queries/get-posts'
    );
    const { posts } = await getPosts(context);

    return {
      posts,
    };
  },
  head() {
    return {
      title: 'Post listing',
    };
  },
};
</script>
