<template>
  <article class="card">
    <div>
      <h1>Contact</h1>
      <ul class="contact-list">
        <li>
          <img src="/envelope.svg" alt="Email symbol" /><a
            :href="`mailto:${email}`"
            >{{ email }}</a
          >
        </li>
        <li>
          <img src="/linkedin.svg" alt="LinkedIn logo" /><a
            href="https://www.linkedin.com/in/gutsav/"
            >LinkedIn</a
          >
        </li>
        <li>
          <img src="/github.svg" alt="GitHub logo" /><a
            href="https://github.com/GuTsaV"
            >GitHub</a
          >
        </li>
        <li>
          <img src="/instagram.svg" alt="Instagram logo" /><a
            href="https://www.instagram.com/GuTsaV/"
            >Instagram</a
          >
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ContactCard',
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
.contact-list {
  list-style-type: none;
  margin-top: 1.5rem;
}

.contact-list li {
  font-size: 16pt;
  margin: 1rem 0 1rem 1rem;
}

.contact-list a {
  margin: 0 0 0 0.5rem;
}

.contact-list li img {
  display: inline;
  width: 1.4rem;
}
</style>
