export default {
  updateName (state, name) {
    state.name = name
  },
  updateGoals (state, goals) {
    console.log(goals)
    state.goals = goals
  },
  updateDiet (state, diet) {
    console.log(diet)
    state.diet = diet
    console.log(state)
  }
}
