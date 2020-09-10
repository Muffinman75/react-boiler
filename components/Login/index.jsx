import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>
                Sign in
            </h1>
            <form>

                <label htmlFor="username" />
                    Username
                <input 
                    id="username"
                    type="text"
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    value={username}
                    name="username"
                />

                <label htmlFor="password" />
                    Password
                <input 
                    id="password"
                    type="password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    name="password"
                />

                <Link to="/Home">
                    <button type="button" className="submit">
                        Login
                    </button>
                </Link>

            </form>
        </div>
    );
}
  
export default Login;