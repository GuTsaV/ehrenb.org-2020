export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s - Gustav Ehrenborg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Gustav Ehrenborg' },
      { property: 'og:type', content: 'website' },
      { name: 'author', content: 'Gustav Ehrenborg' },
      { name: 'robots', content: 'index, follow' },
    ],
    link: [
      { rel: 'icon', type: 'image/ico', href: '/favicon_gustavehrenborg.png' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ],
  },
  css: ['assets/styles/index.scss'],
  styleResources: {
    scss: ['assets/styles/_variables.scss'],
  },
  components: true,
  buildModules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-92413046-1',
      },
    ],
  ],
  modules: ['@/modules/generator', '@nuxtjs/sitemap'],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ehrenb.org',
    cacheTime: 1000 * 60 * 15,
  },
  privateRuntimeConfig: {
    prismicToken: process.env.PRISMIC_TOKEN,
  },
};
