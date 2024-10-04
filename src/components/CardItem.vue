<template>
    <!-- <div class="d-flex me-auto"> -->
    <v-card class="mt-2" color="card" height="150px" width="290px" rounded="lg">
        <div class="parent_container">
            <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center">
                    <img src="@/assets/mc_symbol.svg" height="40px" />
                    <p class="text-align-start">{{ card_type }}</p>
                </div>
                <v-btn color="secondary" variant="tonal" size="small" @click="isCardNumberShown = !isCardNumberShown"
                    icon>
                    <v-icon>{{ isCardNumberShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
                </v-btn>
            </div>
            <div class="card_details">
                <div class="d-flex justify-space-between align-end ga-2">
                    <p style="font-size:medium">{{ isCardNumberShown ? card_number : "···· ···· ···· " + card_number.slice(-4) }}</p>
                    <p>{{ card_expiry_date }}</p>
                </div> 
                <p style="text-transform: uppercase;">{{ card_owner }}</p>
            </div>
        </div>


        <!-- <v-card-text>Lautaro Bonsenor</v-card-text> -->
    </v-card>

    <!-- </div> -->
</template>

<script>
export default {
    name: 'CardItem',
    props: {
        card_brand: {
            type: String,
            required: true
        },
        card_type: {
            type: String,
            required: true
        },
        card_number: {
            type: String,
            required: true,
        },
        card_owner: {
            type: String,
            required: true
        },
        card_expiry_date: {
            type: String,
            required: true
        },
        card_cvv: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isCardNumberShown: false,
        };
    },

};

</script>

<style scoped>
.card_details {
    padding: 5px;
}

.parent_container {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 12px;
}

p {
    font-family: 'Fira Mono', monospace;
    font-size: small;
}
</style>