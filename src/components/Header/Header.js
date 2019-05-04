import React from 'react';
import './Header.css';


const Header = ({children}) => (
    <div className="Header">
        Theater
        {children}
    </div>
)

export default Header;
