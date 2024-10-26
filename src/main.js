/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index'

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(pinia);

app.mount('#app');