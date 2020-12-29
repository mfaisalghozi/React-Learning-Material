import React, { Component } from 'react'
import Hello from './Hello'

class EventBind extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            message : "AKU ADALAH HACKER"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: "GoodBye !"
        })
        // console.log(this)y
    }

    clickHandler2 = () =>{
        this.setState({
            message: "This clickHandler using arrow Function !"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Aja Tod</button> */}
                {/* <button onClick={()=>this.clickHandler()} >Clicking</button> */}

                {/* //OFFICIAL APPROACH BITJH */}
                <button onClick={this.clickHandler} >Clicking Bind From constructor</button>
                <button onClick={this.clickHandler2}>Arrow Function</button>


            </div>
        )
    }
}

export default EventBind
