<template>
  <p class="demo">
    <a v-bind:href="link">
      {{ msg }}
    </a>
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>',
        link: 'https://google.com'
      }
    }
  }
</script>
