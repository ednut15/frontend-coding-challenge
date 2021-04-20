export default {
  nextStage (state) {
    console.log(state)
    this.state.currentStep++
    console.log(state)
  },
  previousStage (state) {
    this.state.currentStep--
  },
  updateName (state, name) {
    state.name = name
  },
  updateGoals (state, goals) {
    state.goals = goals
  },
  updateDiet (state, diet) {
    state.diet = diet
  },
  updateDob (state, dob) {
    console.log(dob)
    state.dob = dob
    console.log(state)
  }
}
