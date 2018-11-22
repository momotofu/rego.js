import './rego.js'
import './styles'

const rego = window.rego

const square = rego.block(
  {},
  { color: 'green' },
  document.querySelector('#root'),
  {
    mount: function(state, props) {
      this.container = document.createElement('div')
      this.container.setAttribute('style', `background: ${props.color}`)
      this.container.classList.add('Square')
      this.root.append(this.container)
    },
    unmount: function(state, props) {
      this.root.remove(this.container)
    },
    render: function(state, props) {
      this.container.setAttribute('style', `background: ${props.color}`)
    }
  }
)

const buttonSwitch = rego.block(
  { isOn: false },
  {
    clickHandler: function() {
      this.setState({
        isOn: !this.state.isOn
      })
      if (this.state.isOn)
        square.setProps({ color: 'red' })
      else
        square.setProps({ color: 'green' })
    }
  },
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
      const isOn = state.isOn

      if (isOn)
        this.buttonSwitch.classList.add('Button-switch-on')
      else
        this.buttonSwitch.classList.remove('Button-switch-on')
    }
})

const buttonSwitch2 = buttonSwitch.clone(
  { isOn: true }, {
    clickHandler: function() {
      this.setState({
        isOn: !this.state.isOn
      })
    }
  },
  document.querySelector('#root'))

const buttonSwitch3 = buttonSwitch.clone(
  { isOn: false }, {
    clickHandler: function() {
      this.setState({
        isOn: !this.state.isOn
      })
    }
  },
  document.querySelector('#root'))
