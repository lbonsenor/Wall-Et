<template>
    <container class="container">
        <v-row no-gutters justify="space-between" class="d-flex">
            <div class="text-container">
                <h3>Alias</h3>
                <v-text class="text-content">{{ alias }}</v-text>
            </div>
            <v-tooltip open-on-click :open-on-hover="false" v-model="AliasCopied" text="Copiado!">
                <template v-slot:activator="{ on, props }">
                    <v-btn v-bind="props" v-on="on" icon="mdi-content-copy" color="secondary" @click="copy(alias)"/>
                </template>
            </v-tooltip> 
        </v-row>
        <v-divider class="mt-4 mb-4" thickness="1" color="white"></v-divider>
        <v-row no-gutters justify="space-between" class="d-flex">
            <div class="text-container">
                <h3>CVU</h3>
                <v-text class="number text-content">{{ cvu }}</v-text>
            </div>
            <v-tooltip open-on-click :open-on-hover="false" v-model="CVUCopied" text="Copiado!">
                <template v-slot:activator="{ on, props }">
                    <v-btn v-bind="props" v-on="on" icon="mdi-content-copy" color="secondary" @click="copy(cvu)"/>
                </template>
            </v-tooltip>
        </v-row>
    </container>
</template>

<script>
    export default{
        data() {
            return {
                AliasCopied: false,
                CVUCopied: false,
            };
        },
        props: {
            alias: {
                type: String,
                required: true
            },
            cvu: {
                type: String,
                required: true
            }
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
        max-width: 450px;
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
    }
    .number{
        font-family: "Fira Mono", monospace;
    }
    .text-container {
        flex-grow: 1;
        overflow: hidden;
    }
    .text-content {
        word-break: break-all;
        overflow-wrap: break-word;
    }
</style>