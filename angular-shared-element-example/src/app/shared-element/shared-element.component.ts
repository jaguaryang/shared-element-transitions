import { Component, OnInit, Input } from '@angular/core';
import html2canvas from 'html2canvas'

@Component({
  selector: '[SharedElement]',
  templateUrl: './shared-element.component.html',
  styleUrls: ['./shared-element.component.css']
})
export class SharedElementComponent implements OnInit {

  @Input() id: string
  @Input() duration: number = 300
  @Input() zindex: number = 1
  @Input() transitionStart: Function
  @Input() transitionEnd: Function

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.transition()

  }

  redirect = (callback) => {
    if (!this.id) return

    let id_common = this.id + "-common"
    let node = document.getElementById(id_common)
    if (node) {
      node.remove();
    }

    node = document.createElement("DIV");
    node.setAttribute("style", "position: absolute; background-size: 100% 100%; transition: all " + (this.duration / 1000) + "s; z-index: " + this.zindex + ";");
    node.id = id_common;
    document.body.appendChild(node);

    let current = document.getElementById(this.id)
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
    if (!this.id) return

    let id_common = this.id + "-common"
    let node = document.getElementById(id_common)
    if (!node) {
      this.visible(true)
      return
    }
    this.visible(false)

    if (this.transitionStart) {
      this.transitionStart()
    }

    let current = document.getElementById(this.id)
    html2canvas(current, { scale: 1 }).then(canvas => {
      let rect = current.getBoundingClientRect()
      node.style.top = rect.top + 'px'
      node.style.left = rect.left + 'px'
      node.style.width = canvas.width + 'px'
      node.style.height = canvas.height + 'px'
      node.style.background = 'url(' + canvas.toDataURL() + ')'
      setTimeout(() => {
        node.remove();
        if (this.transitionEnd) {
          this.transitionEnd()
        }
        this.visible(true)
      }, this.duration);
    })
  }

  visible = (bol) => {
    if (!this.id) return

    const el: HTMLElement = document.getElementById(this.id).parentElement
    el.style.opacity = bol ? "1" : "0"
  }

}
