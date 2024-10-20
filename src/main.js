/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp , reactive} from 'vue'
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index'
import { useUserStore } from './stores/UserStore'

const pinia = createPinia();
const app = createApp(App);


registerPlugins(app);
app.use(router);
app.use(pinia);




app.mount('#app');