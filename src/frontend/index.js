import './rego.js'

const rego = window.rego
const initialBlockState = {
  isOn: false
}

const block = window.rego.block(
  initialBlockState,
  null,
  {
    mount: function(state, props) {
      this.root = document.querySelector('#root')
      this.button = document.createElement('button')

      this.button.textContent = state.isOn
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
