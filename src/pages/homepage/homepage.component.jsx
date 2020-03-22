import React from 'react';

// Styles
import './homepage.styles.scss';

// Components 
import { Directory } from '../../components/directory/directory.component';

const HomePage = props => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};

export default HomePage;