import React from 'react'
import html2canvas from 'html2canvas'
import PropTypes from 'prop-types';

class SharedElement extends React.Component {

  componentDidMount() {
    // console.log('componentDidMount')
    this.transition()
  }

  componentDidUpdate() {
    this.transition()
  }

  redirect = (callback) => {
    const { id, duration, zindex } = this.props
    if (!id) return

    let id_common = id + "-common"
    let node = document.getElementById(id_common)
    if (node) {
      node.remove();
    }

    node = document.createElement("DIV");
    node.setAttribute("style", "position: absolute; background-size: 100% 100%; transition: all " + (duration / 1000) + "s; z-index: " + zindex + ";");
    node.id = id_common;
    document.body.appendChild(node);

    let current = document.getElementById(id)
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
    const { id, duration } = this.props
    if (!id) return

    let id_common = id + "-common"
    let node = document.getElementById(id_common)
    if (!node) {
      this.visible(true)
      return
    }
    this.visible(false)

    if (this.props.transitionStart) {
      this.props.transitionStart()
    }

    let current = document.getElementById(id)
    html2canvas(current, { scale: 1 }).then(canvas => {
      let rect = current.getBoundingClientRect()
      node.style.top = rect.top + 'px'
      node.style.left = rect.left + 'px'
      node.style.width = canvas.width + 'px'
      node.style.height = canvas.height + 'px'
      node.style.background = 'url(' + canvas.toDataURL() + ')'
      setTimeout(() => {
        node.remove();
        if (this.props.transitionEnd) {
          this.props.transitionEnd()
        }
        this.visible(true)
      }, duration);
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

SharedElement.propTypes = {
  id: PropTypes.string.isRequired,
  duration: PropTypes.number,
  zindex: PropTypes.number,
}

SharedElement.defaultProps = {
  duration: 300,
  zindex: 1,
}

export default SharedElement