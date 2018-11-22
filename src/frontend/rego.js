window.rego = (function() {
  return {
    block: function(initialState, initialProps, rootElement, DOMLogic) {
      // TODO: add nested block capability and logic
      // TODO: work out props logic
      // TODO: add meaningful and descriptive comments

      const blockMethods = {
        isMounted: false,
        state: initialState,
        props: initialProps,
        root: rootElement,
        clone: function(initialState, initialProps, root) {
          const block = (function() {
            return Object.assign({}, this,
              initialState ? { state: initialState } : null,
              initialProps ? { props: initialProps } : null,
              rootElement ? root : null)
          }).call(this)

          block.mount(initialState, initialProps)
          block.render(initialState, initialProps)
          return block
        },
        setState: function(newState) {
          this.state = Object.assign({}, this.state, newState);
          this.render.call(this, this.state, this.props);
        },
        setProps: function(newProps) {
          this.props = Object.assign({}, this.props, newProps);
          this.render.call(this, this.state, this.props)
        },
        mount: function() {
          isMounted = true;
          DOMLogic.mount.call(this, this.state, this.props);
        },

        unmount: function() {
          isMounted = false;
          DOMLogic.unmount.call(this);
        },

        render: function() {
          DOMLogic.render.call(this, this.state, this.props);
        }
      }

      blockMethods.mount(this.state, this.props)
      blockMethods.render(this.state, this.props)

      return blockMethods
    }
  }
})()
