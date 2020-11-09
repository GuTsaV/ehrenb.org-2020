<template>
  <div class="post-holder">
    <div class="single-post">
      <div class="post-header">
        <div>
          <h1>{{ post.title }}</h1>
          <h2>{{ post.subtitle }}</h2>
        </div>
        <span>{{ post.createdAt }}</span>
      </div>

      <img v-if="post.image" :src="post.image" />
      <!-- eslint-disable vue/no-v-html -->
      <div class="post-body" v-html="post.body"></div>
      <!--eslint-enable-->
    </div>
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
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.subtitle,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-holder {
  max-width: 95rem;
  margin: 0 auto;
}

.single-post {
  border: 1px solid $middle-grey;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.3rem;
}
</style>
