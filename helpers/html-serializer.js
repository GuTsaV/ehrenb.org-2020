import prismicDOM from 'prismic-dom';
const Elements = prismicDOM.RichText.Elements;

export default (type, element) => {
  if (type === Elements.image) {
    return `
    <div class="image-holder">
      <figure>
        <div class="image-border">
          <img src="${element.url}&fit=crop&w=900&h=600" alt="${element.alt}" />
        </div>
      </figure>
    </div>
    `;
  }

  return null;
};
