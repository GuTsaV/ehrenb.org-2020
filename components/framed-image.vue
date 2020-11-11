<template>
  <div class="image-holder">
    <figure>
      <div class="image-border">
        <img :src="`${image.url}&fit=crop&w=900&h=600`" :alt="image.alt" />
      </div>
      <figcaption v-if="caption">{{ caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'FramedImage',
  props: {
    image: { type: Object, required: true },
    caption: { type: String, default: null },
  },
};
</script>
