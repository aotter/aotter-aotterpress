<template>
<a v-bind:href="link">
  <p class="demo">
      {{ title }}
  </p>
</a>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      }
    }
  }
</script>