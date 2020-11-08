<template>
  <div class="wrapper">
    <Nuxt />
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
          'https://plus.google.com/+GustavEhrenborg',
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
