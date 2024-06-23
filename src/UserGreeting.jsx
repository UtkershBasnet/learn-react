import React from "react";


function UserGreeting(props){
    const loggedIn = <h2>Welcome {props.userName} </h2>
    const loginPrompt = <h2>Login to continue</h2>

    return(props.isLoggedIn ? loggedIn : loginPrompt);
    
}
UserGreeting.PropTypes = {
    userName : PropTypes.string,
    isLoggedIn : PropTypes.bool
}
export default UserGreeting;