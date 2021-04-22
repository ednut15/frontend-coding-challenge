<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No'
          },
          coeliac: {
            name: 'Coeliac'
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat'
          },
          paleo: {
            name: 'Paleo'
          },
          pescatarian: {
            name: 'Pescatarian'
          },
          plantBased: {
            name: 'Plant-based'
          },
          other: {
            name: 'Other'
          }
        },
        checkedDiet: this.$store.getters['survey/getDiet'] === '' ? [] : [this.$store.getters['survey/getDiet']]
      }
    },
    computed: {
      disableNext () {
        return this.checkedDiet.length === 0
      }
    },
    methods: {
      submit () {
        if (this.checkedDiet.length === 1) {
          this.$store.commit('survey/updateDiet', this.checkedDiet[0])
          this.$router.push('/dob')
        }
      },
      back () {
        this.$router.push('/goals')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__diet align-center">
        <h1>Do you follow a particular diet?</h1>
        <div class="spacer sp__top--sm"></div>
        <check-button v-for="(diet, key) in diets" :key="key" :text="diet.name" :value="diet.name" v-model="checkedDiet" :limit="1"></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit" :disabled="disableNext">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
