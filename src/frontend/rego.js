window.rego = (function() {
  return {
    block: function(initialState, initialProps, rootElement, DOMLogic) {
      // TODO: add nested block capability and logic
      // TODO: work out props logic
      // TODO: add meaningful and descriptive comments

      let isMounted = false;
      let state = initialState;
      let props = initialProps;

      const blockMethods = {
        root: rootElement,
        clone: function(initialState, initialProps, root) {
          const block = (function() {
            let isMounted = false;
            //let state = initialState;
            let props = initialProps;

            return Object.create({}, this,
              rootElement ? root : null)
          }).call(this)
          debugger

          block.mount(state, props)
          block.render(state, props)
          return block
        },
        setState: function(newState) {
          state = Object.assign({}, state, newState);
          this.render(state, props);
        },

        getState: function() {
          return state;
        },

        mount: function() {
          isMounted = true;
          DOMLogic.mount.call(this, state, props);
        },

        unmount: function() {
          isMounted = false;
          DOMLogic.unmount.call(this);
        },

        render: function() {
          DOMLogic.render.call(this, state, props);
        }
      }

      blockMethods.mount(state, props)
      blockMethods.render(state, props)

      return blockMethods
    }
  }
})()
