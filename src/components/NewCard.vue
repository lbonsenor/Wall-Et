<!-- <template>
    <v-card class="mt-2 new-card d-flex align-center justify-center" height="30vh" min-width="40vh" max-width="60vh">
        <v-btn variant="tonal" color="secondary" icon>
            <v-icon icon="mdi-plus"></v-icon>
        </v-btn>
    </v-card>
</template>

<style scoped>
.new-card {
    background-color: transparent;
    border-color: rgb(var(--v-theme-secondary));
    border-width: 3px;
    border-style: dashed; /*add more separation between the dashes */
    
}

.icon {
    color: rgb(var(--v-theme-secondary));
}
</style> -->

<template>
    <v-card class="mt-2 new-card d-flex flex-column justify-center" height="30vh" min-width="40vh" max-width="60vh">
      <div class="card-content d-flex flex-column align-center">
        <v-btn class="add-btn mb-3" variant="tonal" color="secondary" icon>
          <v-icon icon="mdi-plus" size="large"></v-icon>
        </v-btn>
        <div class="text-center text-secondary">Agregar tarjeta</div>
      </div>
    </v-card>
  </template>
  
  <style scoped>
  .new-card {
    background-color: transparent;
    border: 3px dashed rgba(var(--v-theme-secondary), 0.5);
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
    border-color: rgb(var(--v-theme-secondary));
    transform: scale(1.02);
  }
  
  .card-content {
    position: relative;
    z-index: 1;
    width: 100%;
  }
  
  .add-btn {
    background-color: rgba(var(--v-theme-secondary), 0.1) !important;
    transition: all 0.3s ease;
  }
  
  .add-btn:hover {
    background-color: rgba(var(--v-theme-secondary), 0.2) !important;
    transform: scale(1.1);
  }
  
  .add-btn .v-icon {
    color: rgb(var(--v-theme-secondary));
  }
  
  .text-secondary {
    color: rgb(var(--v-theme-secondary));
    font-weight: 500;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  .new-card:hover .text-secondary {
    opacity: 1;
  }
  </style>