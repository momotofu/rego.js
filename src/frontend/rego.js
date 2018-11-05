window.rego = (function() {
  return {
    block: function(initialState, initialProps, children) {
      let state = initialState
      let props = initialProps

      return {
        setState: function(oldState, newState) {
          state = object.assign({}, oldState, newState)
          this.render()
        },

        setProps: function(oldProps, newProps) {
          props = object.assign({}, oldProps, newProps)
          this.render()
        },

        render: function() {
        }
      }

    }
  }
})()
