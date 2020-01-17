import React, { Component } from "react"

class SharedElement extends React.Component {

    constructor() {
        super()
        this.state = {
            title: ""
        };
    }
    render() {
        return (<h1>123</h1>)
    }

}

export default SharedElement;