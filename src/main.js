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

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);

app.use(pinia);
app.use(router);


// Create a reactive state for global properties
const state = reactive({
    isSignedIn: false,
  });

app.config.globalProperties.signIn = function() {
    state.isSignedIn = true; // Change visibility
  };
  
app.config.globalProperties.$state = state;

app.mount('#app');