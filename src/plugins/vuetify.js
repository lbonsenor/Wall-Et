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
    primary: '#5d24ff',
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
    secondary: '#FFFFFF',
    'on-secondary': '#5D24FF',
    card: '#3b556e',
    'on-card': "#FFFFFF",
    button_hover: '#713EFF',
    star: "#FFCC00",
    details: '#5D24FF',


    grad1: "#5d24ff",
    grad2: "#7300ff",
    grad3: "#6933ff",
    grad4: "#8a61ff"
  }
}

const darkTheme = {
  dark: true,
  colors: {
    // 101010
    primary: '#5D24FF',
    'on-primary': '#FFFFFF',
    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    success: '#34E350',
    background: '#161313',
    'on-background': '#FFFFFF',
    surface: '#1F1F1F',
    'on-surface': '#FFFFFF',
    button: '#5D24FF',
    'on-button': '#FFFFFF',
    title: '#FFFFFF',
    text_caption: '#C8C8CF',
    secondary: '#5D24FF',
    'on-secondary': '#FFFFFF',
    card: '#3b556e',
    'on-card': "#FFFFFF",
    button_hover: '#713EFF',
    star: "#FFD700",
    details: '#A788FF',


    // transparent: transparent, 
    // 'on-transparent': "#FFFFFF"

    grad1: "#000000",
    grad2: "#202020",
    grad3: "#303030",
    grad4: "#000000"
  }

}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {lightTheme, darkTheme}
  },
  // date: {
  //   adapter: DayJsAdapter, 
  // }
})
