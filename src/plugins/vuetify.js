/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const lightTheme = {
  dark: false,
  colors: {
    primary: '#5D24FF',
    'on-primary': '#FFFFFF',
    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    success: '#009217',
    background: '#5D24FF',
    'on-background': '#FFFFFF',
    surface: '#FDF8FF',
    'on-surface': '#5D24FF'

    
  }
}

const darkTheme = {
  dark: true,
  colors: {
    primary: '#5D24FF',
    'on-primary': '#FFFFFF',
    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    success: '#009217',
    background: '#161618',
    'on-background': '#FFFFFF',
    surface: '#5D24FF',
    'on-surface': '#FFFFFF'
  }

}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {lightTheme, darkTheme}
  },
})
