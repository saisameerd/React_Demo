import { Component } from "react"
import "./index.css"

class Auth extends Component{
    state = {isLoggedIn:false}
    render (){
        const {isLoggedIn} = this.state
        return(
            <div>
                <h1>Hi, User !</h1>
                {isLoggedIn ? <button>Logout</button>:<button>Login</button>}
            </div>
        )
    }
}

export default Auth
