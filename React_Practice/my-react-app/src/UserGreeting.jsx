
// Default Props + Conditional rendering
function UserGreeting({isLoggedIn, username = "Guest"}){ 

    // if(isLoggedIn){
    //     return(
    //         <h2>Welcome {username}</h2>
    //     );
    // }
    // return(
    //     <h2>Welcome Guest</h2>
    // ); 

    const welcomeMessage = <h2 className="welcome-message">
                                Welcome {username}
                            </h2>;
    
    const loginPrompt = <h2 className="login-prompt">
                            Please Login to Continue.
                        </h2>

    return ((isLoggedIn)? welcomeMessage : loginPrompt);
}

// function UserGreeting(props){
//     if(props.isLoggedIn){
//         return(
//             <h2>Welcome {props.username}</h2>
//         );
//     }
//     return(
//         <h2>Welcome Guest</h2>
//     );  
// }

export default UserGreeting;