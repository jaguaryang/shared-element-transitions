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
    this.ref = React.createRef()
  }


  render() {
    return (
      <div style={{ width: '600px', margin: 'auto', opacity: this.isTransitioning ? 0 : 1 }}>

        <button type="button" onClick={e => {
          this.ref.current.redirect(() => this.props.history.push("/component2"))
        }} style={{ margin: '15px 0' }}>Go Component2</button>

        <SharedElement
          ref={this.ref}
          id='shared-id-123'
          style={{ width: 400, height: this.height, backgroundColor: 'red' }}
        >
          Content of Component1
        </SharedElement>

        <button type="button" onClick={e => {
          this.height = 500
        }} style={{ margin: '15px 0' }}>Change Props</button>

      </div>
    )
  }

}

export default withRouter(observer(Component))
