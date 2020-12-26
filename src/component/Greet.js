import React from 'react'

// function Greet(){
//     return <h1>Hello Testing 123</h1>
// }

const Greet = ({name,heroName}) => {
console.log(name)
    return (
        <div>
            <h1>Hello World from {name} as {heroName}</h1>
            {/* {props.children} */}
        </div>    
    )
}

export default Greet