import React, {Component} from "react";

class Login extends Component {
    constructor () {
        super ();

        this.state = {
            username : "",
            password: ""
        }
   }

render () {
    return (
        <form>
            Username : <input type = "text" name = "username"></input>
            Password<input type = "text" name = "username"></input>
            <button type = "submit">Login</button>
        </form>
    )
}

}


export default Login;