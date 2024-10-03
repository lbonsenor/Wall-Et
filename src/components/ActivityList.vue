<template>
    <div class="activity-list">
      <div class="activity-container">
        <template v-for="(activity, index) in displayedActivities" :key="index">
          <div v-if="isNewDate(index)" class="date-header">
            {{ formatDate(activity.date) }}
          </div>
          <activity-list-card v-bind="activity" />
        </template>
      </div>
    </div>
  </template>
  
  <script>
  import ActivityListCard from './ActivityListCard.vue'
  
  export default {
    name: 'ActivityList',
    components: {
      ActivityListCard
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
      }
    }
  }
  </script>
  
  <style scoped>
  .activity-list {
    max-width: 500px;
    margin: 12px 0;
  }
  
  .activity-container {
    background-color: rgb(var(--v-theme-surface));
    border-radius: 20px;
    overflow: hidden;
  }
  
  .date-header {
    text-align: left;
    padding: 20px 20px 10px ;
    font-size: 14px;
    font-weight: 600;
    color: rgb(var(--v-theme-text_caption));
    position: sticky;
    top: 0;
    z-index: 1;
  }
  </style>