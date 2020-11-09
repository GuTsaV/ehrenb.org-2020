import { RichText } from 'prismic-dom';
import getApi from './get-api';

export const getPost = async context => {
  const api = await getApi(context);
  const postData = await api.getByUID('post', context.params.uid);

  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  const post = {
    uid: postData.uid,
    title: RichText.asText(postData.data.title),
    subtitle: RichText.asText(postData.data.subtitle),
    body: RichText.asHtml(postData.data.body),
    createdAt: new Date(postData.first_publication_date).toLocaleString(
      'en-uk',
      options,
    ),
  };

  return {
    post,
  };
};
