import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        return <h1>Class component {this.props.name} as {this.props.name}</h1>
    }
}


export default Welcome