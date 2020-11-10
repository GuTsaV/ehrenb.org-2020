<template>
  <div class="wrapper">
    <div class="content">
      <top-header v-if="$route.name !== 'index'"></top-header>
      <Nuxt />
    </div>
  </div>
</template>
