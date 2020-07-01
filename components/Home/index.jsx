import React from "react";
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="logout-container">
            <h1>
                Welcome home userName!
            </h1>

            <Link to="/">
                <button type="submit" className="logout">
                    Sign out
                </button>
            </Link>
        </div>
    );
}
  
export default Home;