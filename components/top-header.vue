<template>
  <header>
    <nuxt-link :to="'/'">
      <div class="title-box">
        <h1>Gustav Ehrenborg</h1>
        <h2>fullstack developer</h2>
      </div>
    </nuxt-link>
    <div class="logo-box">
      <li>
        <a :href="`mailto:${email}`">
          <img src="/envelope.svg" alt="Email symbol"
        /></a>
        <a href="https://www.linkedin.com/in/gutsav/"
          ><img src="/linkedin.svg" alt="LinkedIn logo"
        /></a>
        <a href="https://github.com/GuTsaV"
          ><img src="/github.svg" alt="GitHub logo"
        /></a>
        <a href="https://www.instagram.com/GuTsaV/"
          ><img src="/instagram.svg" alt="Instagram logo"
        /></a>
      </li>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader',
  data: () => {
    return {
      email: 'gro.bnerhe@ih'
        .split('')
        .reverse()
        .join(''),
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  border: 1px solid $middle-grey;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding: 1rem;
}

.logo-box img {
  display: inline-block;
  margin: 0.8rem;
  width: 1.8rem;
}
</style>
