<template>
    <container class="container">
        <v-row no-gutters justify="space-between" class="d-flex">
            <div>
                <h3>Alias</h3>
                <v-text>{{ alias }}</v-text>
            </div>
            <v-tooltip open-on-click :open-on-hover="false" v-model="AliasCopied" close-delay="1000" text="Copiado!">
                <template v-slot:activator="{ on, props }">
                    <v-btn v-bind="props" v-on="on" icon="mdi-content-copy" color="on-primary" @click="copy(alias)"></v-btn>
                </template>
            </v-tooltip>
        </v-row>
        <v-divider class="mt-4 mb-4" thickness="1" color="white"></v-divider>
        <v-row no-gutters justify="space-between" class="d-flex">
            <div>
                <h3>CVU</h3>
                <v-text class="number">{{ cvu }}</v-text>
            </div>
            <v-tooltip open-on-click :open-on-hover="false" v-model="CVUCopied" close-delay="1000" text="Copiado!">
                <template v-slot:activator="{ on, props }">
                    <v-btn v-bind="props" v-on="on" icon="mdi-content-copy" color="on-primary" @click="copy(cvu)"></v-btn>
                </template>
            </v-tooltip>
        </v-row>
    </container>
</template>

<script>
    export default{
        data() {
            return {
                alias: "lau.bonsenor",
                cvu: "00000000123145687945123",
                AliasCopied: false,
                CVUCopied: false,
            };
        },
        methods:{
            async copy(text){
                try{
                    await navigator.clipboard.writeText(text)
                    setTimeout(()=>this.CVUCopied = false, 1000);
                    setTimeout(()=>this.AliasCopied = false, 1000);
                } 
                catch(e) {
                    alert('El texto no pudo ser copiado')
                }
            }
        }
    }
</script>

<style>
    .container{
        display: flex;
        min-width: 300px;
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
    }
    .number{
        font-family: "Roboto Mono", monospace;
    }
</style>