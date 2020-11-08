import { RichText } from 'prismic-dom';
import getApi from './get-api';

export const getPost = async context => {
  const api = await getApi(context);
  const postData = await api.getByUID('post', context.params.uid);

  const post = {
    uid: postData.uid,
    title: RichText.asText(postData.data.title),
    body: RichText.asHtml(postData.data.body),
  };

  return {
    post,
  };
};
