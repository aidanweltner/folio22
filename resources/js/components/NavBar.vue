<template>
  <transition
    enter-active-class="duration-400 transition-all ease-in-out"
    enter-class="opacity-0 -translate-y-16 "
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-600 ease-in-out"
    leave-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-16"
  >
    <header
      v-if="bannerIsVisible"
      class="transition-all duration-400 ease-in-out fixed z-10 inset-0 bg-coffee-200 dark:bg-stone-800 justify-between h-16 flex items-center"
      :class="{ 'shadow-sm': previousScroll > 100 }"
    >
        <div class="flex justify-between items-center container mx-auto">
            <ToggleMenu v-if="isRendered">
                <slot />
            </ToggleMenu>
        </div>
    </header>
  </transition>
</template>

<script>
import ToggleMenu from './ToggleMenu.vue'

export default {
  components: {
    ToggleMenu,
  },

  data() {
    return {
      bannerIsVisible: true,
      isRendered: false,
      previousScroll: window.pageXOffset,
    }
  },

  created() {
    window.onscroll = this.toggleBanner
    this.isRendered = true
  },

  methods: {
    toggleBanner() {
      const currentScroll = window.pageYOffset

      if ( currentScroll > this.previousScroll ) {
        this.bannerIsVisible = false
      } else {
        this.bannerIsVisible = true
      }

      this.previousScroll = currentScroll
    }
  }
}
</script>