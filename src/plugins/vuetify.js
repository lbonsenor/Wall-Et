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
    onPrimary: '#FFFFFF',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    success: '#009217',
    background: 'FDF8FF',
  }
}

const darkTheme = {
  dark: true,
  colors: {
    primary: '#5D24FF',
    onPrimary: '#FFFFFF',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    success: '#009217',
    background: '121212',
  }

}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'darkTheme',
    themes: {lightTheme, darkTheme}
  },
})
