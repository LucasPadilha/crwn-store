import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

export const MenuItem = withRouter(
    ({ title, imageUrl, size, pathUrl, history, match }) => {
        return (
            <div className={ `${size} menu-item` } onClick={ () => { history.push(`${match.url}${pathUrl}`) } }>
                <div style={ { backgroundImage: `url(${imageUrl})` } } className="background-image"> </div>
                <div className="content">
                    <h1 className="title">{ title.toUpperCase() }</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        );
    }
);