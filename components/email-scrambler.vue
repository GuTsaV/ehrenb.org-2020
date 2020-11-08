<template>
  <li>
    <img src="/envelope.svg" alt="Email symbol" />
    {{ email }}
  </li>
</template>

<script>
export default {
  name: 'EmailScrambler',
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
