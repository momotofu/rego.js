window.rego = (function() {
  return {
    block: function(initialState, initialProps, rootElement, DOMLogic, children = []) {
      // TODO: add nested block capability and logic
      // TODO: add meaningful and descriptive comments

      const blockMethods = {
        isMounted: false,
        state: initialState,
        props: initialProps,
        root: rootElement,
        children: children,
        clone: function(initialState, initialProps, root) {
          const block = (function() {
            const state = this.state
            const props = this.props

            return Object.assign({}, this,
              initialState ? { state: initialState } : { state },
              initialProps ? { props: initialProps } : { props },
              { root })
          }).call(this)

          block.mount(initialState, initialProps)
          block.render(initialState, initialProps)
          return block
        },
        addChild: function(child) {
          this.children.push(child)
        },
        removeChild: function(child) {
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
          this.children.forEach((child) => {
            child(this.state, this.props)
            console.log('called', this)
          }, this)
        }
      }

      blockMethods.mount(this.state, this.props)
      blockMethods.render(this.state, this.props)

      return blockMethods
    }
  }
})()
