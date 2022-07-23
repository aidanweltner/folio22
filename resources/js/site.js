import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import FigurePopup from './components/FigurePopup.vue'
import { DocumentTextIcon, ExternalLinkIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/outline'

createApp({
  components: {
    NavBar,
    FigurePopup,
    DocumentTextIcon, ExternalLinkIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon,
  }
}).mount('#app')
