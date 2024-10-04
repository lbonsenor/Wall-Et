<template>
    <v-card class="mt-2 new-card d-flex flex-column justify-center" height="30vh" min-width="40vh" max-width="60vh">
      <div class="card-content d-flex flex-column align-center">
        <v-btn class="add-btn mb-3" variant="tonal" color="white" icon>
          <v-icon icon="mdi-plus" size="large"></v-icon>
        </v-btn>
        <p class="text-center add">Agregar tarjeta</p>
      </div>
    </v-card>
  </template>
  
  <style scoped>
  .new-card {
    background-color: transparent;
    border: 3px dashed white;
    opacity: 0.5;    
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .new-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(var(--v-theme-secondary), 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .new-card:hover::before {
    opacity: 1;
  }
  
  .new-card:hover {
    border-color: white;
    opacity: 1;
    transform: scale(1.02);
  }

  .add-btn {
    background-color: (white, 0.1);
    transition: all 0.3s ease;
  }
  
  .add-btn:hover {
    background-color: (white, 0.4);
    transform: scale(1.1);
  }
  
  .add-btn .v-icon {
    color: white;
  }
  
  .add {
    color: white;
    font-weight: 500;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  .new-card:hover .text-secondary {
    opacity: 1;
  }
  </style>