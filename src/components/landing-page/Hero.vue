

<template>
    <div class="hero-container">
      <div class="left-content">
        <div class="content-wrapper">
          <h2>Tu plata, tus reglas: <span class="highlight">simplifica tus finanzas</span></h2>
          <p class="description">La billetera virtual que Argentina estaba esperando - rápido, seguro y fácil.</p>
          <div class="input-group">
            <v-text-field 
              variant="outlined" 
              rounded="lg"
              placeholder="Email"
              persistent-placeholder
              hide-details
              hide-spin-buttons
              color="secondary"
              width="300px"
            ></v-text-field>
            <div class="hi" @click="navigateToRegisterPage">Empezar</div>
          </div>
        </div>
      </div>
      <div class="right-content">
        <img src="@/assets/wallet.svg" alt="Wallet" />
      </div>
    </div>
  </template>
  
  <script setup>
  const navigateToRegisterPage = () => {
    alert("To register page")
  }
  </script>
  
  <style scoped>
  .hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    gap: 2rem;
    margin-top: 30px;
  }
  
  .left-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  
  .content-wrapper {
    max-width: 500px;
  }
  
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .highlight {
    color: rgb(var(--v-theme-title_span));
  }
  
  .description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    margin-bottom: 2rem;
  }
  
  .input-group {
    display: flex;
    gap: 1rem;
  }
  
  .right-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .right-content img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  
.hi {
    display: inline-flex;
    padding: 12px 24px;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-weight: normal;
    font-size: normal;
    letter-spacing: normal;
    background: linear-gradient(135deg, #7c3aff 0%, #5d24ff 50%, #4a00e0 100%);
    /* transition: all 0.3s ease; */
    color: white;
    border: none;
    border-radius: 12px;
    height: 56px; 
    box-shadow:0 4px 6x rgba(93,36,255,0.2), 0 0 15px rgba(93,36,255,0.3);
    position: relative;
    overflow: hidden;


}

.hi:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow:0 6px 8px rgba(93,36,255,0.3), 0 0 20px rgba(93, 36, 255, 0.4);
}

.hi:before {
    content: '';
    position: absolute; 
    top: -2px; 
    left: -2px; 
    right: -2px;
    bottom: -2px; 
    background: linear-gradient(135deg, #8d5bff, #5d24ff, #4a00e0, #8d5bff);
    z-index:-1;
    filter: blur(10px); 
    opacity:0;
    transition: opacity 0.3s ease;
}

.hi:active{
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(93, 36, 255, 0.2), 0 0 10px rgba(93, 36, 255, 0.3)
}
    
  @media (max-width: 820px) {
    .hero-container {
      flex-direction: column;
      text-align: center;
    }
  
    .left-content, .right-content {
      justify-content: center;
    }
  
    .content-wrapper {
      max-width: 100%;
    }
  
    .input-group {
      flex-direction: column;
      align-items: center;
    }
  
    .right-content img {
      max-height: 300px;
    }
  }
  
  @media (max-width: 600px) {
    .hero-container {
      padding: 1rem;
    }
  
    .right-content img {
      max-height: 200px;
    }
  }
  </style>