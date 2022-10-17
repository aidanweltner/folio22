<template>
  <nav class="ml-auto">
    <button
        class="hamburger hamburger--spin sm:hidden"
        :class="{ 'is-active': isExpanded }"
        @click="isExpanded = ! isExpanded"
        type="button" aria-label="Menu" aria-controls="navigation" :aria-expanded="String(isExpanded)"
    >
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
        <span class="hamburger-label sr-only">Menu</span>
    </button>
    <div class="absolute top-full right-0 w-full h-screen bg-coffee-200 dark:bg-stone-800 transition-opacity ease-in-out duration-200" :class=" isExpanded ? 'opacity-80 block' : 'opacity-0 hidden' " @click="isExpanded = false"></div>
    <div id="navigation" class="sm:block relative" :class="{ 'hidden' : !isExpanded }">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isExpanded : false,
      }
    },
  }
</script>

<style scoped>
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after,
  .hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner::before, .hamburger.is-active .hamburger-inner::after {
    background-color: #695f4d;
  }

  @media (prefers-color-scheme: dark) {
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after,
    .hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner::before, .hamburger.is-active .hamburger-inner::after {
      background-color: #f0ebe4;
    }
  }
</style>