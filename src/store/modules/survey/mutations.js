export default {
  updateName (state, name) {
    this.state.survey.name = name
  },

  updateGoals (state, { goals }) {
    console.log(goals)
    state.goals = goals
  }
}
