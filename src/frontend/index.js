import './rego.js'
import './styles'

const rego = window.rego

const square = rego.block(
  {},
  {
    red: 0,
    green: 0,
    blue: 0,
    size: {
      height: '200px',
      width: '200px'
    }
  },
  document.querySelector('#root'),
  {
    mount: function(state, props) {
      this.container = document.createElement('div')
      this.setContainerStyles = function(props) {
        this.container.setAttribute(
          'style',
          `
          background: rgb(${props.red}, ${props.green}, ${props.blue});
          height: ${props.size.height};
          width: ${props.size.width}
          `
        )
      }
      this.container.setAttribute('id', 'square')
      this.container.classList.add('Square')
      this.root.append(this.container)
    },
    unmount: function(state, props) {
      this.root.remove(this.container)
    },
    render: function(state, props) {
      this.setContainerStyles(props)
    }
  }
)


const circle = rego.block(
  {},
  {
    red: 255,
    green: 255,
    blue: 255,
    size: {
      height: '100px',
      width: '100px'
    }
  },
  document.querySelector('#square'),
  {
    mount: function(state, props) {
      this.container = document.createElement('div')
      this.setContainerStyles = function(props) {
        this.container.setAttribute(
          'style',
          `
          background: rgb(${props.red * 2}, ${props.green / 4}, ${props.blue / 6});
          height: ${props.size.height};
          width: ${props.size.width}
          `
        )
      }
      this.container.setAttribute('id', 'circle')
      this.container.classList.add('Circle')
      this.root.append(this.container)
    },
    unmount: function(state, props) {
      this.root.remove(this.container)
    },
    render: function(state, props) {
      this.setContainerStyles(props)
    }
  }
)

square.addChild(function(state, props) {
  circle.setProps({
    red: props.red,
    green: props.green,
    blue: props.blue
  })
})

//const circle2 = circle.clone(null, null, document.querySelector('#circle'))
//circle.addChild(function(state, props) {
  //circle2.setProps({
    //red: props.green,
    //green: props.blue,
    //blue: props.red
  //})
//})

const buttonSwitch = rego.block(
  { isOn: false },
  {
    clickHandler: function() {
      this.setState({
        isOn: !this.state.isOn
      })
      if (this.state.isOn)
        square.setProps({ red: 255 })
      else
        square.setProps({ red: 0 })
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
      if (this.state.isOn)
        square.setProps({ green: 255 })
      else
        square.setProps({ green: 0 })
    }
  },
  document.querySelector('#root'))

const buttonSwitch3 = buttonSwitch.clone(
  { isOn: false }, {
    clickHandler: function() {
      this.setState({
        isOn: !this.state.isOn
      })
      if (this.state.isOn)
        square.setProps({ blue: 255 })
      else
        square.setProps({ blue: 0 })
    }
  },
  document.querySelector('#root'))
