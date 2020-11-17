<template>
  <div class="post-holder">
    <article>
      <div class="post-header">
        <div>
          <h1>{{ post.title }}</h1>
          <h2>{{ post.subtitle }}</h2>
        </div>
        <span>{{ date }}</span>
      </div>

      <framed-image :image="post.image"></framed-image>

      <!-- eslint-disable vue/no-v-html -->
      <div class="post-body" v-html="post.body"></div>
      <!--eslint-enable-->
    </article>
  </div>
</template>

<script>
import metaMapper from '@/helpers/meta-mapper';
import SyntaxHighlighterMixin from '@/assets/mixins/syntax-highlighter-mixin';

export default {
  mixins: [SyntaxHighlighterMixin],
  async asyncData(context) {
    const { getPost } = await import('@/queries/get-post');
    const { post } = await getPost(context);

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const date = post.createdAt.toLocaleString('en-uk', options);

    const metadata = {
      pageType: post.pageType,
      pagetitle: post.title,
      title: post.title,
      image: post.image.url,
      description: post.preamble,
      createdAt: post.createdAt,
      modifiedAt: post.createdAt,
    };

    return {
      post,
      date,
      metadata,
    };
  },
  head() {
    return metaMapper(this.metadata, this.$router.currentRoute.path);
  },
};
</script>

<style lang="scss" scoped>
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-holder article {
  padding: 2rem 12rem;
}

@media only screen and (max-width: 1000px) {
  .post-holder article {
    padding: 1rem;
  }
}

article {
  border: 1px solid $middle-grey;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.3rem;
}
</style>
