import React from 'react';

//creating stateless functional components
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    </div>

);


//example of default props
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;