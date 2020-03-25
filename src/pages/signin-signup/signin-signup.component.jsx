import React from 'react';

// styles
import './signin-signup.styles.scss';

// components
import SingIn from '../../components/sign-in/sign-in.component';

const SignInSignUpPage = props => {
    return (
        <div className='signin-signup'>
            <SingIn />
        </div>
    );
};

export default SignInSignUpPage;