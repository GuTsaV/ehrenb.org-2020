<template>
  <div class="card-holder">
    <first-card
      :title="startpage.title"
      :subtitle="startpage.subtitle"
      :image="startpage.image"
    ></first-card>
    <about-card
      :title="startpage.aboutTitle"
      :body="startpage.aboutBody"
    ></about-card>
    <contact-card></contact-card>
    <card v-for="post in posts" :key="post.uid" :post="post"></card>
    <empty-card></empty-card>
    <empty-card></empty-card>
  </div>
</template>

<script>
import metaMapper from '@/helpers/meta-mapper';

export default {
  async asyncData(context) {
    const { getStartpage } = await import('@/queries/get-startpage');

    const { startpage, posts } = await getStartpage(context);

    const metadata = {
      pageType: 'home',
      pagetitle: 'Home',
      title: startpage.title,
      image: startpage.image,
      description: startpage.description,
    };

    return {
      startpage,
      posts,
      metadata,
    };
  },
  head() {
    return metaMapper(this.metadata, this.$router.currentRoute.path);
  },
};
</script>
