import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import { DocumentTextIcon, ExternalLinkIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/outline'

createApp({
  components: {
    NavBar,
    DocumentTextIcon, ExternalLinkIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon,
  }
}).mount('#app')
