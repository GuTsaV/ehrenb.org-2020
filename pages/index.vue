<template>
  <div class="card-holder">
    <first-card :post="startpage.firstCard"></first-card>
    <about-card :post="startpage.aboutCard"></about-card>
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
      link: [
        {
          rel: 'canonical',
          href: 'https://ehrenb.org',
        },
      ],
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
          content: '',
        },
        {
          property: 'og:url',
          hid: 'og:url',
          content: 'https://ehrenb.org',
        },
      ],
    };
  },
};
</script>
