export default (fields, path) => {
  const url = `https://ehrenb.org${path}`;

  const metaData = {
    title: fields.pagetitle,
    link: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
    meta: [
      {
        property: 'og:title',
        hid: 'og:title',
        content: fields.title,
      },
      {
        property: 'og:image',
        hid: 'og:image',
        content: fields.image ? fields.image : '',
      },
      {
        name: 'description',
        hid: 'description',
        content: fields.description,
      },
      {
        property: 'og:url',
        hid: 'og:url',
        content: url,
      },
    ],
  };

  if (fields.pageType === 'home') {
    metaData.script = [
      {
        json: {
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
        type: 'application/ld+json',
      },
    ];
  } else if (fields.pageType === 'post') {
    metaData.meta.push({
      property: 'og:type',
      hid: 'og:type',
      content: 'article',
    });
    metaData.meta.push({
      property: 'og:publish_time',
      hid: 'og:publish_time',
      content: fields.createdAt.toISOString(),
    });
    metaData.script = [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          headline: fields.title,
          image: fields.image,
          url,
          datePublished: fields.createdAt.toISOString(),
          dateModified: fields.modifiedAt.toISOString(),
          description: fields.description,
          author: {
            '@type': 'Person',
            name: 'Gustav Ehrenborg',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Gustav Ehrenborg',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        },
        type: 'application/ld+json',
      },
    ];
  }

  return metaData;
};
