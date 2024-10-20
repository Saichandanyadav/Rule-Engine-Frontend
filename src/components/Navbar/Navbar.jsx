import  { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <h1>Rule Engine App</h1>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/create">Create Rule</a>
                    <a href="https://www.linkedin.com/in/saichandanyadav/" target="_blank" rel="noopener noreferrer">
                        Follow Me
                    </a>
                </div>
            </nav>

           
            <div className="main-content">
                <h2>Welcome to the Rule Engine App</h2>
                <p>This is the main content section that will be rendered below the navbar.</p>
            </div>
        </>
    );
};

export default Navbar;
