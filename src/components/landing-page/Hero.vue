<template>
    <div class="row pa-12 ga-12 ma-12" style="height:auto">
        <div>
            <h2>Tu plata, tus reglas: <span style="color: rgb(var(--v-theme-title_span));">simplifica tus finanzas</span></h2>
            <br/>
            <h4>La billetera virtual que Argentina estaba esperando - rápido, seguro y fácil.</h4>
            <div class="row ga-2 mt-6">
                <v-text-field 
                width="70%" variant="outlined" rounded="lg"
                placeholder="Email"
                persistent-placeholder
                hide-details
                hide-spin-buttons

                color="secondary"
                ></v-text-field>
                <div class="hi"
                @click="navigateToRegisterPage"
                >Empezar</div>
            </div>
        </div>
        <div class="img-container" style="width:50%">
            <img src="@/assets/wallet.svg" width="500px"/>
        </div>
    </div>
</template>

<script setup>
const navigateToRegisterPage = () => {
    alert("To register page")
}

</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center; 
    align-content: center;
    justify-content: space-between;
    flex-wrap:nowrap;
}

h2 {
    font-size: xxx-large;
}

h4 {
    font-weight: 500;
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

</style>