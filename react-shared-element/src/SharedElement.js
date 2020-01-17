import React from 'react'
import html2canvas from 'html2canvas'

class SharedElement extends React.Component {

  constructor(props) {
    // console.log('constructor')
    super(props);
    this.state = {
      duration: 300,
    }
  }

  componentDidMount() {
    // console.log('componentDidMount')
    this.transition()
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
    this.generate()
  }

  generate = (callback) => {
    const { id } = this.props
    if (!id) return

    let current = document.getElementById(id)
    if (!current) return

    let id_common = id + "-common"
    let node = document.getElementById(id_common)
    if (node) {
      node.remove();
    }

    node = document.createElement("DIV");
    node.setAttribute("style", "display: none; position: absolute; background-size: 100% 100%; transition: all " + (this.state.duration / 1000) + "s;");
    node.id = id_common;
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

  transition = () => {
    const { id } = this.props
    if (!id) return

    let id_common = id + "-common"
    let node = document.getElementById(id_common)
    if (!node) {
      this.visible(true)
      this.generate()
      return
    }
    node.style.display = 'block'

    let current = document.getElementById(id)

    if (this.props.transitionStart) {
      this.props.transitionStart()
    }

    this.visible(false)
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
        this.visible(true)
        this.generate()
      }, this.state.duration);
    })
  }

  visible = (bol) => {
    const { id } = this.props
    if (!id) return
    
    let current = document.getElementById(id)
    current.parentNode.style.opacity = bol ? 1 : 0
  }

  render() {
    // console.log('render')
    const { ...props } = this.props
    return (
      <div {...props}>
        {this.props.children}
      </div>
    )
  }
}

export default SharedElement