import React, { Component } from 'react';

// styles
import './sign-in.styles.scss';

// components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput label="Email" type="email" name="email" value={ this.state.email } handleChange={ this.handleChange } required />
                    <FormInput label="Password" type="password" name="password" value={ this.state.password } handleChange={ this.handleChange } required />

                    <CustomButton type="submit">SignIn</CustomButton>
                </form>
            </div>
        );
    }
};

export default SignIn;