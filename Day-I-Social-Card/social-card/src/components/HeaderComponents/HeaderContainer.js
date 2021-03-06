import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';


const HeadContainer = () => (
    <div className="header">
        <div className="header-image">
            <ImageThumbnail/>
        </div>
        <div className="header-text">
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    </div>
);



export default HeadContainer;
