import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import FigurePopup from './components/FigurePopup.vue'
import { DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'

createApp({
  components: {
    NavBar,
    FigurePopup,
    DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowLongLeftIcon, ArrowLongRightIcon,
  }
}).mount('#app')
