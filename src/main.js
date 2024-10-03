/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'
import router from '@/router/index'

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.mount('#app');
