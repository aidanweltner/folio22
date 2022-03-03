import { createApp } from 'vue'
import ToggleMenu from './components/ToggleMenu.vue'
import { DocumentTextIcon, ExternalLinkIcon } from '@heroicons/vue/outline'

createApp({
  components: {
    ToggleMenu,
    DocumentTextIcon, ExternalLinkIcon,
  }
}).mount('#app')
