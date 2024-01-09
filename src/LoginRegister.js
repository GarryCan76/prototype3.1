import {useState} from "react";
import Login from "./Login";
import Register from "./Register";

function LoginRegister(props){
    const socket = props.socket;
    const [Screen, setScreen] = useState(true);


    function login(){

    }

    return(
        <div>
            {Screen && <Login socket={socket}/>}
            {!Screen && <Register socket={socket}/>}
        </div>

    )
}

export default LoginRegister;