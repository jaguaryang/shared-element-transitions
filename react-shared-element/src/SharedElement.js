import React from 'react'
import html2canvas from 'html2canvas'

class SharedElement extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.transitionEnd()
  }

  transitionStart = (callback) => {
    let shared_id = this.props.shared_id
    if (!shared_id) return

    let current = document.getElementById(shared_id)
    if (!current) return

    var node = document.createElement("DIV");
    node.setAttribute("style", "position: absolute; background-size: 100% 100%; transition: all .3s;");
    node.id = shared_id + "-common";
    document.body.appendChild(node);

    html2canvas(current, { scale: 1 }).then(canvas => {
      let rect = current.getBoundingClientRect()
      node.style.top = rect.top + 'px'
      node.style.left = rect.left + 'px'
      node.style.width = canvas.width + 'px'
      node.style.height = canvas.height + 'px'
      node.style.background = 'url(' + canvas.toDataURL() + ')'
      if (callback) callback()
    })
  }

  transitionEnd = () => {
    let shared_id = this.props.shared_id
    if (!shared_id) return

    let node = document.getElementById(shared_id + "-common")
    if (!node) return

    let current = document.getElementById(shared_id)
    if (!current) return

    if (this.props.transitionStart) {
      this.props.transitionStart()
    }

    html2canvas(current, { scale: 1 }).then(canvas => {
      let rect = current.getBoundingClientRect()
      node.style.top = rect.top + 'px'
      node.style.left = rect.left + 'px'
      node.style.width = canvas.width + 'px'
      node.style.height = canvas.height + 'px'
      node.style.background = 'url(' + canvas.toDataURL() + ')'
      setTimeout(() => {
        node.remove();
        if (this.props.transitionStop) {
          this.props.transitionStop()
        }
      }, 300);
    })
  }

  render() {
    return (
      <div
        id={this.props.shared_id}
        style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

export default SharedElement