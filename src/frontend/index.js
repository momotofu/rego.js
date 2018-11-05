import './rego.js'

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

const block = window.rego.block(
  initialBlockState,
  initialProps,
  {
    mount: function(state, props) {
      this.root = document.querySelector('#root')
      this.button = document.createElement('button')

      this.button.textContent = state.isOn
      this.button.addEventListener('click', props.clickHandler.bind(this))
      this.root.append(this.button)
    },
    unmount: function(state, props) {
      this.root.removeChild(button)
    },
    render: function(state, props) {
      this.button.textContent = state.isOn
    }
})

block.setState({
  isOn: true
})
block.setState({
  isOn: false
})
