import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['brue','jon','an']
    const persons = [
        {   
            id: 1,
            name: 'andi',
            umur: 30,
            hobi: 'tidur'
        },
        {
            id: 2,
            name: 'tina',
            umur: 20,
            hobi: 'makan'
        },{
            id: 3,
            name: 'alex',
            umur: 21,
            hobi: 'mandi'
        }
    ]
    const nameList = names.map((x,index) => <h2 key={index}>{x} with index is {index}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList

