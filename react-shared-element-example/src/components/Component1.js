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
      height: 200,
    })
  }


  render() {
    return (
      <div style={{ width: '600px', margin: 'auto', opacity: this.isTransitioning ? 0 : 1 }}>
        <div onClick={e => {
          this.props.history.push("/component2")
        }}>Go Component2</div>

        <SharedElement
          id='shared-id-123'
          style={{ width: 400, height: this.height, backgroundColor: 'red' }}
        >
          Content of Component1
        </SharedElement>

        <div onClick={e => {
          this.height = 500
        }}>Change Props</div>

      </div>
    )
  }

}

export default withRouter(observer(Component))
