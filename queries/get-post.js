import { RichText } from 'prismic-dom';
import htmlSerializer from '@/helpers/html-serializer';
import getApi from './get-api';

export const getPost = async context => {
  const api = await getApi(context);
  const postData = await api.getByUID('post', context.params.uid);

  const post = {
    uid: postData.uid,
    title: RichText.asText(postData.data.title),
    subtitle: RichText.asText(postData.data.subtitle),
    image: postData.data.image,
    preamble: postData.data.preamble,
    body: RichText.asHtml(postData.data.content, null, htmlSerializer),
    createdAt: new Date(postData.data.publish_date),
    pageType: postData.type,
  };

  return {
    post,
  };
};
