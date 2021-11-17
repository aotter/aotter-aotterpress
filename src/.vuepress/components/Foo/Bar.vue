<template>
  <div class="demo">
    <div>
      {{ msg }}
    </div>
    <div>
      {{ title }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    const msg = ref('Hello this is <Foo-Bar>123213')
    const msg2 = ref('你好World你好')

    return {
      msg: computed(() => msg.value.replace(/[\d]/g, '').toUpperCase()),
      msg2,
    }
  },
})
</script>
