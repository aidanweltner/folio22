import { createApp } from 'vue'
import VueLazyload from 'vue-lazyload'
import NavBar from './components/NavBar.vue'
import FigurePopup from './components/FigurePopup.vue'
import { Lightbox } from 'vue-image-lightbox'
// @NOTE could also try `npm install --save vue-easy-lightbox@nex`
import { DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const Vue = createApp({
  components: {
    NavBar,
    FigurePopup,
    Lightbox,
    DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowLongLeftIcon, ArrowLongRightIcon,
  }
}).mount('#app').use(VueLazyload)
