<script>
  export default {
    name: 'CheckButton',
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      modelValue: {
        default: []
      },
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      },
      limit: {
        type: Number
      }
    },
    computed: {
      isSelected () {
        if (this.modelValue instanceof Array) {
          return this.modelValue.includes(this.value)
        }
        return this.modelValue === this.trueValue
      },
      isDisabled () {
        return (!!(this.limit && this.modelValue.length > this.limit - 1)) && this.modelValue.indexOf(this.value) === -1
      }
    },
    methods: {
      updateInput (event) {
        let isSelected = event.target.checked
        if (this.modelValue instanceof Array) {
          let newValue = [...this.modelValue]
          if (isSelected) {
            newValue.push(this.value)
          } else {
            newValue.splice(newValue.indexOf(this.value), 1)
          }
          this.$emit('change', newValue)
        } else {
          this.$emit('change', isSelected ? this.trueValue : this.falseValue)
        }
      }
    }
  }
</script>

<template>
  <label class="check-button__label">
    <div class="check-button" :class="{ 'check-button--selected': isSelected, 'check-button--disabled': isDisabled }" tabindex="0">
      <p class="check-button__text body--large">{{ text }}</p>
      <input class="checkbox" type="checkbox" :checked="isSelected" :value="value" @change="updateInput"
             :disabled="isDisabled"/>
    </div>
  </label>
</template>

<style lang="css">
  .check-button {
    background: #fff;
    border: 1px solid #ced0d9;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
    font-weight: 400;
    transition: .2s;
    padding: 0 10px;
    border-radius: .25rem;
  }
  .check-button input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  @media (min-width: 768px) {
    .check-button {
      height: 120px;
      margin-bottom: 20px;
    }
  }

  .check-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.0625rem 0.25rem 0 rgba(61,66,80,.18);
  }

  .check-button:focus {
    box-shadow: 0 0 3px 3px rgba(62,202,221,.5);
    outline: none;
  }

  .check-button--selected {
    border: 2px solid #3ecadd;
    background: #f4fcfd;
    box-shadow: none;
  }

  .check-button--disabled {
    border: 1px solid #e5e7f1;
    background: #fff;
    box-shadow: none;
    color: #ced0d9;
  }

  .check-button--disabled:hover {
    outline: none
  }

  .check-button__text {
    color: #3d4250
  }
</style>
