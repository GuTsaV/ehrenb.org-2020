<template>
  <div class="image-holder">
    <figure>
      <div class="image-border">
        <img :src="`${imageUrl}?auto=compress,format&fit=crop&w=900&h=600`" />
      </div>
      <figcaption v-if="caption">{{ caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'FramedImage',
  props: {
    imageUrl: { type: String, required: true },
    caption: { type: String, default: null },
  },
};
</script>

<style lang="scss" scoped>
.image-holder {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

figure {
  max-width: 45rem;
  text-align: center;
}

.image-border {
  border: 1px solid $middle-grey;
  padding: 0.3rem;
}
</style>
