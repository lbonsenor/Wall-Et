<template>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-chip
        variant="outlined"
        :text="displayText"
        v-bind="props"
        input-value="chipSelected"
        @click="handleChipClick"
      />
    </template>

    <v-card prepend-icon="mdi-calendar" :title="isRange ? 'Seleccionar período' : 'Seleccionar fecha'">
      <v-card-text>
        <v-date-picker class="calendar"
          v-model="currentSelection"
          :multiple="isRange ? 'range' : false"
        />
      </v-card-text>
      <v-card-actions class="mb-2">
        <v-btn color="details" @click="toggleMode">
          {{ isRange ? 'Seleccionar fecha' : 'Seleccionar período' }}
        </v-btn>
        <v-btn color="success" @click="confirmSelection" :disabled="!isValidSelection" class="mr-2">
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'

const dialog = ref(false)
const isRange = ref(false)
const currentSelection = ref(isRange.value ? [] : null)
const confirmedSelection = ref(isRange.value ? [] : null)
const chipSelected = ref(false)


console.log("hi" + currentSelection.value);

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })
}

const isValidSelection = computed(() => {
    console.log("invalid" + currentSelection.value);
  if (isRange.value) {
    return Array.isArray(currentSelection.value) && currentSelection.value.length >= 2
  }
  return currentSelection.value !== null
})

const displayText = computed(() => {
  if (!confirmedSelection.value) return 'Otro período...'
  if (Array.isArray(confirmedSelection.value)) {
    return `${formatDate(confirmedSelection.value[0])} - ${formatDate(confirmedSelection.value[confirmedSelection.value.length-1])}`
  }
  return formatDate(confirmedSelection.value)
})

const toggleMode = () => {
  isRange.value = !isRange.value
  currentSelection.value = isRange.value ? [] : null
}

const confirmSelection = () => {
  confirmedSelection.value = currentSelection.value
  dialog.value = false
}

const handleChipClick = () => {
  if (!chipSelected.value) {
    chipSelected.value = true
    dialog.value = true
  } else {
    chipSelected.value = false
    dialog.value=false
    // Do not open dialog when unselecting
  }
}
</script>

<style scoped>

.calendar :deep(.v-date-picker-header__content){
    font-size: large;
    font-weight: bold;
    line-height: 16px;
}

.calendar :deep(.v-date-picker-header){
    height: 16px;
    padding-bottom: 12px;
}
.calendar :deep(.v-picker-title) {
    display: none;
}
</style>