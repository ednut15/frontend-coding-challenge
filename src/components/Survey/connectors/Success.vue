<script>
  import Thrivaling from '@/assets/images/thrivaling.png'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Success',
    components: {
      ThvButton
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      goals: {
        type: Array,
        default: function () {
          return []
        }
      },
      diet: {
        type: String,
        default: ''
      },
      dob: {
        type: String,
        default: ''
      }
    },
    computed: {
      imgSrc () {
        return Thrivaling
      },
      goalsString () {
        return this.goals.join(', ')
      },
      dobString () {
        if (this.dob !== '') {
          const parsedValue = new Date(this.dob)
          let day = parsedValue.getUTCDate().toString()
          let month = (parsedValue.getUTCMonth() + 1).toString()
          let year = parsedValue.getFullYear().toString()
          return day + '/' + month + '/' + year
        }
        return ''
      }
    },
    methods: {
      startOver () {
        this.$store.commit('survey/resetState')
        this.$router.push('/name')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-success align-center">
        <div class="success__img success__img--thrivaling">
          <img v-bind:src="imgSrc" />
        </div>
        <div class="spacer sp__top--xs"></div>
        <h1>All Done!</h1>
        <p class="body--large">Thank you for Completing the survey. The following results have been Submitted</p>
        <div class="spacer sp__top--sm"></div>
        <div class="success__info align-left">
          <p class="label text--grey">Name</p>
          <p class="text--xx-dark-grey">{{ name }}</p>
          <div class="spacer sp__top--xs"></div>
          <p class="label text--grey">Goals</p>
          <p class="text--xx-dark-grey">{{ goalsString }}</p>
          <p class="label text--grey">Diet</p>
          <p class="text--xx-dark-grey">{{ diet }}</p>
          <p class="label text--grey">DOB</p>
          <p class="text--xx-dark-grey">{{ dobString }}</p>
          <div class="spacer sp__top--sm"></div>
          <div class="grid-x button-container">
            <div class="cell auto align-center">
              <thv-button element="button" size="large" @click="startOver">Start over</thv-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='css'>
  .survey-success {
    max-width: 400px;
    margin: auto;
  }
  .success__img {
    height: 150px;
  }
  .success__img img {
    height: 100%;
  }
  .success__info {
    text-align: left;
    padding: 30px 0 30px 30px;
    box-shadow: 0 6px 20px #3d4250;
    border-radius: 10px;
  }
  .success__info {
    text-align: left;
    padding: 30px 0 30px 30px;
  }
  .success__info .label {
    font-size: 14px;
  }
  .success__info .details {
    color: #3d4250;
  }
</style>
