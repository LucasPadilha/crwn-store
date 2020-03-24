import React from 'react';

// styles
import './not-found.styles.css';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ history }) => {
    return (
        <div>
            <h1>Ooops... Page not found!</h1>
            <button onClick={ history.goBack }>Go back</button>
        </div>
    );
};

export default withRouter(NotFoundPage);