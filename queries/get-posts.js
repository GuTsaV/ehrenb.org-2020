import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-dom';
import getApi from './get-api';

export const getPosts = async context => {
  const api = await getApi(context);

  const postsData = await api.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.publication_date desc]', pageSize: 100 },
  );

  const posts = postsData.results.map(post => ({
    uid: post.uid,
    title: RichText.asText(post.data.title),
    image: post.data.image.url,
    body: post.data.preamble,
  }));

  return {
    posts,
  };
};
