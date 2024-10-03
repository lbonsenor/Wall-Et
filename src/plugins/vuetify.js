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
    primary: '#101010',
    'on-primary': '#FFFFFF',
    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    success: '#34E350',
    background: '#101010',
    'on-background': '#FFFFFF',
    surface: '#1F1F1F',
    'on-surface': '#FFFFFF',
    button: '#5D24FF',
    'on-button': '#FFFFFF',
    title: '#FFFFFF',
    text_caption: '#C8C8CF',

  }

}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {lightTheme, darkTheme}
  },
})
