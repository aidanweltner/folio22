<template>
  <div class="relative">
    <button type="button" @click="isOpen = ! isOpen" class="font-mono text-coffee-600 dark:text-coffee-300 tracking-wide xl:text-lg" :aria-expanded="isOpen">
      <span>{{ title }}</span>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div v-if="isOpen" class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-sm flex-auto rounded-3xl bg-coffee-200 dark:bg-stone-800 p-4 text-sm leading-6 shadow-lg ring-1 ring-coffee-900/5 dark:ring-coffee-100/5">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Menu'
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>
