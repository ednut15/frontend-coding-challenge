<script>
  import TextInput from '@/components/Shared/TextInput'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Name',
    components: {
      TextInput,
      ThvButton
    },
    data () {
      return {
        name: this.$store.getters['survey/getName']
      }
    },
    methods: {
      submit () {
        this.$store.commit('survey/updateName', this.name)
        this.$router.push({
          name: 'goals',
          params: {
            name: this.name
          }
        })
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__name align-center">
        <h1>Hey! We're Thriva. What’s your first name?</h1>
        <div class="spacer sp__top--sm"></div>
        <text-input class="survey-input" type="text" name="name" v-model="name" @keyup.enter="submit"></text-input>
        <div class="grid-x button-container">
          <div class="cell auto align-right">
            <thv-button element="button" size="large" :disabled="!name" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
