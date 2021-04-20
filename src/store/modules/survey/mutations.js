export default {
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
