window.rego = (function() {
  return {
    block: function(initialState, initialProps, DOMLogic) {

      let state = initialState
      let props = initialProps

      const blockMethods = {
        setState: function(newState) {
          state = Object.assign({}, state, newState)
          this.render()
        },

        getState: function() {
          return state
        },

        mount: function() {
          DOMLogic.mount.call(this, state, props)
        },

        unmount: function() {
          DOMLogic.unmount.call(this)
        },

        render: function() {
          DOMLogic.render.call(this, state, props)
        }
      }

      blockMethods.mount()

      return blockMethods
    }
  }
})()
