import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        modelValue: []
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.find(CheckButton).exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    console.log(wrapper.classes(), wrapper.find('.check-button__label'))
    expect(wrapper.find('.check-button__text').text()).toEqual('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(wrapper.find('.check-button--selected').exists()).toBe(false)
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', async () => {
  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge
})
