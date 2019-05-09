import React from 'react';
import './Header.css';
import HeaderImage from './ImageThumbnail';
import HeaderContent from './HeaderContent';
const HeaderContainer = () => {
    return (
    <div className ="headerContainer">
        <HeaderImage/>
        <HeaderContent/>
        
    </div>
    ); 
}

export default HeaderContainer;