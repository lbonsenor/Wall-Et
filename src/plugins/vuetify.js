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
    'on-surface': '#5D24FF',
    button: '#5D24FF',
    'on-button': '#FFFFFF',
    title: '#000000',
    text_caption: '#5A5A5A',

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
    'on-surface': '#FFFFFF',
    button: '#FFFFFF',
    'on-button': '#5D24FF',
    title: '#FFFFFF',
    text_caption: '#5A5A5A',

  }

}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {lightTheme, darkTheme}
  },
})
