<template>
  <nav class="lg:ml-auto">
    <button
        class="hamburger hamburger--spin lg:hidden"
        :class="{ 'is-active': isExpanded }"
        @click="isExpanded = ! isExpanded"
        type="button" aria-label="Menu" aria-controls="navigation" :aria-expanded="String(isExpanded)"
    >
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
        <span class="hamburger-label sr-only">Menu</span>
    </button>
    <div id="navigation" class="lg:block relative" :class="{ 'hidden' : !isExpanded }">
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