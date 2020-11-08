<template>
  <div class="card-holder">
    <card :post="post"></card>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { getPost } = await import('@/queries/get-post');

    const { post } = await getPost(context);

    return {
      post,
    };
  },
};
</script>
