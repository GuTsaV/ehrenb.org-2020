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
export default {
  async asyncData(context) {
    const { getStartpage } = await import('@/queries/get-startpage');

    const { startpage, posts } = await getStartpage(context);

    return {
      startpage,
      posts,
    };
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Gustav Ehrenborg - fullstack developer with a passion for shoes and cooking',
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: 'Gustav Ehrenborg',
        },
        {
          property: 'og:image',
          hid: 'og:image',
          content: this.startpage.image,
        },
        {
          property: 'og:url',
          hid: 'og:url',
          content: 'https://ehrenb.org',
        },
        {
          property: 'og:type',
          hid: 'og:url',
          content: 'website',
        },
      ],
    };
  },
};
</script>
