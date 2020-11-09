<template>
  <div class="wrapper">
    <div class="content">
      <top-header v-if="$route.name !== 'index'"></top-header>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Gustav Ehrenborg',
        jobtitle: 'Developer',
        url: 'https://ehrenb.org',
        sameAs: [
          'https://www.linkedin.com/in/gutsav',
          'https://www.facebook.com/gutsav',
          'https://github.com/GuTsaV',
          'https://www.instagram.com/gutsav/',
          'https://twitter.com/GuTsaV',
        ],
      },
    };
  },
  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }],
    };
  },
};
</script>
