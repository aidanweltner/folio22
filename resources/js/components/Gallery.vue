<template>
  <div class="container mx-auto md:px-8 lg:px-16 xl:px-24 mb-8 lg:mb-16">
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
      <li v-for="(img, index) in imgs" :key="index" class="w-full h-full relative">
        <div class="group relative w-full h-full" @click="() => showImg(index)">
          <figure class="relative w-full h-24 xl:h-42">
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover"/>
            <div class="absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transistion-opacity ease-in-out delay-100 bg-gradient-to-t from-stone-800/60 to-transparent"></div>
            <div class="absolute right-2 bottom-2 transition-all delay-200 ease-in-out group-hover:opacity-100 opacity-0 scale-75 group-hover:scale-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-coffee-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
          </figure>
        </div>
      </li>
    </ul>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
      loop="true"
      scrollDisabled="true"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

export default {
  setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0)

    const showImg = (index) => {
      indexRef.value = index
      visibleRef.value = true
    }
    const onHide = () => {
      visibleRef.value = false
    }

    return {
      visibleRef,
      indexRef,
      showImg,
      onHide,
    }
  },
  components: {
    VueEasyLightbox
  },
  props: {
    imgs: Object,
  }
}
</script>