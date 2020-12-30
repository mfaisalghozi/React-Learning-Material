import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    state = {
        parentName: 'Parent'
    }
    
    greetParent = async (name) => {
        alert(`Hello ${this.state.parentName} from ${name}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
