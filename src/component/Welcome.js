import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        // const 
        return (
            <h1>
            Class component {name} as {heroName}
            </h1>
        )
    }
}


export default Welcome