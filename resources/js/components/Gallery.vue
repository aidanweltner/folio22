<template>
  <ul class="container mx-auto md:px-8 lg:px-16 xl:px-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
    <li v-for="(img, index) in imgs" :key="index" class="w-full h-full relative">
      <div class="group relative w-full h-full" @click="() => showImg(index)">
        <figure class="relative w-full h-24 xl:h-42">
          <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transistion-opacity ease-in-out delay-100 bg-gradient-to-t from-stone-800/60 to-transparent"></div>
          <div class="absolute right-2 bottom-2 transition-all delay-200 ease-in-out group-hover:opacity-100 opacity-0 scale-75 group-hover:scale-100">
            <ArrowsPointingOutIcon class="h-4 w-4 text-coffee-100" />
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
</template>

<script>
import {ArrowsPointingOutIcon} from '@heroicons/vue/24/outline'
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
    ArrowsPointingOutIcon,
    VueEasyLightbox
  },
  props: {
    imgs: Object,
  }
}
</script>