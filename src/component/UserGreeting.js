import React, { Component } from 'react'

class UserGreeting extends Component {

    state = {
        isLoggedIn : false
    }

    render() {
        
        //CARA KETIGA DENGAN TERNARY OPERATOR
        // return this.state.isLoggedIn ? 
        //     (<div>Hello GHozi</div>):
        //     (<div>Hello Guest</div>)

        //CARA KEDUA TAMPUNG JSX DI VARIABLE
        let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Ghozi</div>
        }else{
            message = <div>Welcome Guest</div>
        }

        return(
            <div>{message}</div>
        )

        //CARA NORMAL BIASA RETURN DI DALAM IF-ELSE
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Guest</div>
        //         <div>Welcome Home</div>
        //     </div>
        // )
    }
}

export default UserGreeting
