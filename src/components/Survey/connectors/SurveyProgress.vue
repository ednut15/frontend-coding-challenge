<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    data () {
      return {
        stages: ['name', 'goals', 'diet', 'dob', 'success']
      }
    },
    computed: {
      currentStep () {
        let pageName = this.$route.name
        return this.stages.indexOf(pageName) + 1
      }
    }
  }
</script>

<template>
  <div class="progress-bar-container">
  <!-- SUGGESTION: progress-bar needs a currentStep and a stages array. These need to be passed in here	 -->
  <!-- SUGGESTION: un-comment the below when your ready to pass these in	 -->
   <progress-bar :currentStep='currentStep' :totalSteps='stages.length'></progress-bar>
  </div>
</template>

<style lang="css">
  .progress-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: 80px;
    align-items: center;
  }

</style>
