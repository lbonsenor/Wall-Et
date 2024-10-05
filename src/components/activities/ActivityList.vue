<template>
      <div class="activity-container">
        <div class="d-flex justify-space-between mb-4">
            <h1 class="title">Actividades Recientes</h1>
            <v-btn class="link" @click="navigateToActivities" elevation="0" variant="text" density="compact">Ver más ></v-btn>
        </div>
        <template v-for="(activity, index) in displayedActivities" :key="index">
          <div v-if="isNewDate(index)" class="date-header">
            {{ formatDate(activity.date) }}
          </div>
          <ActivityItem v-bind="activity" />
        </template>
      </div>
  </template>
  
  <script>
  import ActivityItem from './ActivityItem.vue'
  
  export default {
    name: 'ActivityList',
    components: {
      ActivityItem
    },
    props: {
      activities: {
        type: Array,
        required: true
      },
      displayCount: {
        type: Number,
        default: Infinity
      }
    },
    computed: {
      displayedActivities() {
        return this.activities.slice(0, this.displayCount)
      }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        const options = { day: 'numeric', month: 'long' }
        return date.toLocaleDateString('es-ES', options)
      },
      isNewDate(index) {
        if (index === 0) return true
        return this.displayedActivities[index].date !== this.displayedActivities[index - 1].date
      },
      navigateToActivities() {
        return this.$router.push('/actividades')
      }
    }
  }
  </script>
  
  <style scoped>
  .activity-container {
    background-color: rgb(var(--v-theme-surface));
    border-radius: 20px;
    overflow: hidden;
    padding: 20px 0;
  }
  
  .date-header {
    text-align: left;
    padding: 0 20px 10px ;
    font-size: 14px;
    font-weight: 600;
    color: rgb(var(--v-theme-text_caption));
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .title { 
    color: rgb(var(--v-theme-title));
    align-self: center;
    font-size: medium;
    font-weight: bold;
    padding: 0 20px 0 20px;
    /* margin: 12px */
}
.link {
    color: rgb(var(--v-theme-primary));
    font-size:x-small;
    /* padding: 0 20px 0 0; */
    margin-right: 3%;

}
  </style>