<template>
    <nav class="topnav">
      <a href="#" class="nav-link" :class="{ active: activeLink === 'home' }" @click="setActive('home')">Home</a>
      <a href="#features" class="nav-link" :class="{ active: activeLink === 'features' }" @click="setActive('features')">Features</a>
      <a href="#testimonials" class="nav-link" :class="{ active: activeLink === 'testimonials' }" @click="setActive('testimonials')">Testimonials</a>
      <a href="#about" class="nav-link" :class="{ active: activeLink === 'about' }" @click="setActive('about')">About</a>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeLink = ref('home');
  
  const setActive = (linkName) => {
    activeLink.value = linkName;
  };
  </script>
  
  <style>
  html {
    scroll-behavior: smooth;
  }
  .topnav {
    background: rgba(var(--v-theme-nav), 0.5);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 80%;
    text-align: center;
    border-radius: 25px;
    padding: 5px 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%)
  }
  
  .nav-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 25px;
    transition: all 0.3s ease;
    display: inline-block;
  }
  
  .nav-link:hover {
    background-color: rgba(var(--v-theme-secondary), 1);
    color: rgb(var(--v-theme-nav_title));
  }
  
  .nav-link.active {
    font-weight: bold;
    background-color: rgba(var(--v-theme-secondary), 1)!important;
    color: rgb(var(--v-theme-nav_title))!important;
  }
  
  @media (max-width: 768px) {
    .topnav {
      width: 95%;
      padding: 5px 10px;
    }
  
    .nav-link {
      padding: 8px 12px;
      font-size: 14px;
    }
  }
  </style>