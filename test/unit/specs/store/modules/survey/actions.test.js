import actions from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')
const user = {
  user: {
    name: 'Test',
    goals: ['Mood'],
    diet: 'No',
    dob: Date.now()
  }
}
const URL = 'http://localhost:3000/users'
const config = { headers: { 'content-type': 'application/json' } }

describe('actions', () => {
  describe('sendToApi', () => {
    // Write any useful test based on the sendToApi action logic here
    it('should call axios with correct parameters', () => {
      actions.sendToApi({}, { ...user })
      expect(axios.post).toHaveBeenCalledWith(URL, user, config)
    })
  })
})
