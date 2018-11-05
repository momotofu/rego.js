window.rego = (function() {
  return {
    block: function(initialState, initialProps, DOMLogic) {
      // TODO: add nested block capability and logic
      // TODO: work out props logic
      // TODO: add meaningful and descriptive comments

      var state = initialState
      var props = initialProps

      var blockMethods = {
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
