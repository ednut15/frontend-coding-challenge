export default {
  nextStage (state) {
    this.state.currentStep++
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
    state.dob = dob
  }
}
