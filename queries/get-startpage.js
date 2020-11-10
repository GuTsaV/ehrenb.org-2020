import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-dom';
import getApi from './get-api';

export const getStartpage = async context => {
  const api = await getApi(context);

  const startpageData = await api.getSingle('startpage');

  const postsData = await api.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.publication_date desc]', pageSize: 100 },
  );

  const startpage = {
    title: RichText.asText(startpageData.data.title),
    subtitle: RichText.asText(startpageData.data.subtitle),
    description: startpageData.data.description,
    image: startpageData.data.startpage_image,
    aboutTitle: RichText.asText(startpageData.data.second_card_heading),
    aboutBody: RichText.asHtml(startpageData.data.second_card_body),
  };

  const posts = postsData.results.map(post => ({
    uid: post.uid,
    title: RichText.asText(post.data.title),
    image: post.data.image,
    body: post.data.preamble,
  }));

  return {
    startpage,
    posts,
  };
};
