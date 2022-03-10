import { createApp } from 'vue'
import ToggleMenu from './components/ToggleMenu.vue'
import { DocumentTextIcon, ExternalLinkIcon, ArrowNarrowLeftIcon } from '@heroicons/vue/outline'

createApp({
  components: {
    ToggleMenu,
    DocumentTextIcon, ExternalLinkIcon, ArrowNarrowLeftIcon,
  }
}).mount('#app')
