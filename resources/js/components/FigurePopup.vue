<template>
  <button
    class="group relative w-full h-full"
    @click="popup = ! popup"
  >
    <figure
      :class="popup
                ? 'fixed z-50 inset-0 h-full p-12'
                : 'relative w-full h-24 xl:h-42 '
              "
    >
      <slot />
      <div
        class="absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transistion-opacity ease-in-out delay-100 bg-gradient-to-t from-stone-800/60 to-transparent"
        :class="popup ? 'hidden' : 'block'"
      ></div>
      <div
        class="absolute right-2 bottom-2 transition-all delay-200 ease-in-out group-hover:opacity-100 opacity-0 scale-75 group-hover:scale-100"
        :class="popup ? 'hidden' : 'block'"
      >
        <ArrowsPointingOutIcon class="h-4 w-4 text-coffee-100" />
      </div>
    </figure>
  </button>
</template>

<script>
  import {ArrowsPointingOutIcon} from '@heroicons/vue/24/outline'

  export default {
    components: {
      ArrowsPointingOutIcon,
    },

    data() {
      return {
        popup: false,
      }
    }
  }
</script>