import { useState} from 'react';
import './LoginForm.css'

export function LoginForm(){

    const [showPassword, setPassword] = useState(false);

    function showContent(){
        if(showPassword){
            setPassword(false);
        }else{
            setPassword(true);
        }
    }
    return(
        <>
            <div>
                <input
                    placeholder="Email"
                    className="input"
                />
            </div>
            <div>
                <input
                    placeholder="Password"    
                    type={showPassword?'Text':"Password"}  
                    className="input" 
                />
                <button
                    onClick={showContent}
                >{showPassword?'Hide':"Show"}</button>
            </div>
            <>
                <button 
                    className="authentication-button">
                Login</button>
                <button 
                    className="authentication-button">
                Sign Up</button>
            </>
        </>
        
    )
}