import React from 'react';

// styles
import './signin-signup.styles.scss';

// components
import SingIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = props => {
    return (
        <div className='signin-signup'>
            <SingIn />
            <SingUp />
        </div>
    );
};

export default SignInSignUpPage;