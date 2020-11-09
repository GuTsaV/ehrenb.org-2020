<template>
  <article class="card">
    <h1>{{ title }}</h1>
    <!-- eslint-disable vue/no-v-html -->
    <div class="post-body" v-html="body"></div>
    <!--eslint-enable-->
  </article>
</template>

<script>
export default {
  name: 'AboutCard',
  props: {
    title: { type: String, required: true },
    body: { type: String, default: '' },
  },
};
</script>
