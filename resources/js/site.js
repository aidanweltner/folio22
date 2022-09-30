import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import Gallery from './components/Gallery'
import { DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'

createApp({
  components: {
    NavBar,
    Gallery,
    DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowLongLeftIcon, ArrowLongRightIcon,
  }
}).mount('#app')
