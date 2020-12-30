import React from 'react'

function Person({person}) {
    return (
        <div>
           <h2>{person.name} his age is {person.umur} and hobi nya {person.hobi}</h2> 
        </div>
    )
}

export default Person
