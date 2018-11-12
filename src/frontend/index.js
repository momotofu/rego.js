import './rego.js'
import './styles'

const rego = window.rego
const initialBlockState = {
  isOn: false
}
const initialProps = {
  clickHandler: function() {
    this.setState({
      isOn: !this.getState().isOn
    })
  }
}

const buttonSwitch = window.rego.block(
  initialBlockState,
  initialProps,
  document.querySelector('#root'),
  {
    mount: function(state, props) {
      this.button = document.createElement('div')
      this.buttonSwitch = document.createElement('div')

      this.button.classList.add('Button')
      this.buttonSwitch.classList.add('Button-switch')

      this.button.addEventListener('click', props.clickHandler.bind(this))

      this.button.append(this.buttonSwitch)
      this.root.append(this.button)
    },
    unmount: function(state, props) {
      this.root.removeChild(this.button)
    },
    render: function(state, props) {
      console.log('state: ', state)
      const isOn = state.isOn

      if (isOn)
        this.buttonSwitch.classList.add('Button-switch-on')
      else
        this.buttonSwitch.classList.remove('Button-switch-on')
    }
})

const buttonSwitch2 = buttonSwitch.clone({ isOn: true }, initialProps, document.querySelector('#root'))
