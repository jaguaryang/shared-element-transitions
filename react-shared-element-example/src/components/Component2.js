import React from 'react'
import { extendObservable } from "mobx"
import { observer } from "mobx-react"
import { withRouter } from "react-router-dom"
import SharedElement from "react-shared-element"

class Component extends React.Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      isTransitioning: false,
      sharedElement: React.createRef(),
    })
  }


  render() {
    return (
      <div style={{ width: '200px', margin: '300px auto 0', opacity: this.isTransitioning ? 0 : 1 }}>
        <div onClick={e => {
          this.sharedElement.current.transitionStart(() => {
            this.props.history.push("/component1")
          })
        }}>Go Component1</div>

        <SharedElement
          ref={this.sharedElement}
          shared_id='shared-id-123'
          transitionStart={() => { this.isTransitioning = true }}
          transitionStop={() => { this.isTransitioning = false }}
          style={{ width: 200, height: 100, backgroundColor: 'green' }}
        >
          Content of Component2
        </SharedElement>

      </div>
    )
  }

}

export default withRouter(observer(Component))
