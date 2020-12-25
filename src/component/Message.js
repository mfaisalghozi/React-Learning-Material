import React, { Component } from 'react'

class Message extends Component {
    
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor From State',
            stat: 0
        }
    }
    
    changeMessage(){
        if(this.state.stat === 0){
            this.setState({
                message: 'Thank you for subscribing!',
                stat: 1
            })
        }else{
            this.setState({
                message: 'Welcome visitor From Space!',
                stat: 0
            })
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message