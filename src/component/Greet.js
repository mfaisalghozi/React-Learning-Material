import React from 'react'

// function Greet(){
//     return <h1>Hello Testing 123</h1>
// }

const Greet = (props) => {
console.log(props.name)
    return (
        <div>
            <h1>Hello World from {props.name} as {props.heroName}</h1>
            {props.children}
        </div>    
    )
}

export default Greet