import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increment(){
        // this.setState({
        //     count : this.state.count + 1
        // }, ()=>{
        //     console.log('Callback Value', this.state.count)
        // })
        
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))

    }

    incrementFive(){
        for(let j=0;j<5;j++){
            this.increment();
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>Count - {this.state.count}</h1>
                </div>
                <button onClick={()=>this.incrementFive()}>Add</button>
            </div>
        )
    }
}

export default Counter
