import Prismic from 'prismic-javascript';

export default async context => {
  const { prismicToken } = context.$config;

  return await Prismic.getApi('https://ehrenborg.cdn.prismic.io/api/v2', {
    accessToken: prismicToken,
  });
};
