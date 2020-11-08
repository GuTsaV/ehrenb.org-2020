<template>
  <div class="card-holder">
    <card v-for="post in posts" :key="post.uid" :post="post"></card>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { getPosts } = await import('@/queries/get-posts');

    const { posts } = await getPosts(context);

    return {
      posts,
    };
  },
};
</script>
