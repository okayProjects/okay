import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// import NavWrapper from '../Navigation/NavWrapper/NavWrapper';
import Form from '../UI/Form/Form';
import Button from '../UI/Buttons/Button';
import Spinner from '../UI/Spinner/Spinner';
import './Auth.css';
import * as actions from '../../Store/Actions/actionsIndex';

const signInForm = [
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'email',
            placeholder: 'Twój adres email',
            name: 'signInEmail',
            // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
            // title: 'Twój email musi mieć format: nazwa@nazwa.domena'
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'password',
            placeholder: 'Twoje hasło',
            name: 'signInPassword',
            // pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
            // title: "Twoje hasło musi składać się z co najmniej 8 znaków, musi zawierać co najmniej jedną dużą i jedną małą literę oraz cyfrę"
        }
    }
];
const signUpForm = [
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'email',
            placeholder: 'Twój adres email',
            name: 'signUpEmail',
            // pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
            // title: 'Twój email musi mieć format: nazwa@nazwa.domena'
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'password',
            placeholder: 'Twoje hasło',
            name: 'signUpPassword',
            // pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
            // title: "Twoje hasło musi składać się z co najmniej 8 znaków, musi zawierać co najmniej jedną dużą i jedną małą literę oraz cyfrę"
        }
    }
];


class Auth extends Component {

    state = {
        signUpEmail: '',
        signUpPassword: '',
        signInEmail: '',
        signInPassword: '',
        signUpFormSent: false,
        signInFormSent: false,
    };

    inputHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState(prevState => {
            return { [name]: prevState[name] = value };
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const submitName = e.target.name;

        if (submitName === 'signUp') {
            this.props.onAuth(this.state.signUpEmail, this.state.signUpPassword, submitName);
            this.setState(prevState => {
                return {
                    signUpEmail: prevState.signUpEmail = '',
                    signUpPassword: prevState.signUpPassword = '',
                    signInFormSent: prevState.signInFormSent = false,
                    signUpFormSent: prevState.signUpFormSent = true,
                };
            });
        } else if (submitName === 'signIn') {
            this.props.onAuth(this.state.signInEmail, this.state.signInPassword, submitName);
            this.setState(prevState => {
                return {
                    signInEmail: prevState.signInEmail = '',
                    signInPassword: prevState.signInPassword = '',
                    signUpFormSent: prevState.signUpFormSent = false,
                    signInFormSent: prevState.signInFormSent = true,
                };
            });
        };
    };

    // validation = () => {
    //     let email = false;
    //     let password = false;
    //     let formCorrect = false;

    //     if (this.state.password.length >= 6) {
    //         password = true;
    //     }


    // }


    render() {

        let signInInputs = signInForm.map(item => (
            <Form
                key={item.elementConfiguration.name}
                elementType={item.elementType}
                elementConfiguration={item.elementConfiguration}
                value={this.state[item.elementConfiguration.name]}
                change={this.inputHandler} />
        ));
        let signUpInputs = signUpForm.map(item => (
            <Form
                key={item.elementConfiguration.name}
                elementType={item.elementType}
                elementConfiguration={item.elementConfiguration}
                value={this.state[item.elementConfiguration.name]}
                change={this.inputHandler} />
        ));

        if (this.props.loading && this.state.signInFormSent) {
            signInInputs = <Spinner />
        };
        if (this.props.loading && this.state.signUpFormSent) {
            signUpInputs = <Spinner />
        };

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <span>{this.props.error.message}</span>
            );
        };

        return (
            <>
                {/* <NavWrapper /> */}
                <div className='auth-wrapper'>
                    <div className='form'>
                        <h3>Zaloguj się</h3>
                        {this.state.signInFormSent && errorMessage}
                        <form onSubmit={this.submitHandler} name='signIn'>
                            {signInInputs}
                            <Button btnType='offer-info-button'>Zaloguj</Button>
                        </form>
                        <Link className='password-reset' to='/passwordReset'>Nie pamiętasz hasła?</Link>
                    </div>
                    <div className='form'>
                        <h3>Utwórz nowe konto</h3>
                        {this.state.signUpFormSent && errorMessage}
                        <form onSubmit={this.submitHandler} name='signUp'>
                            {signUpInputs}
                            <Button btnType='offer-info-button'>Utwórz konto</Button>
                        </form>
                    </div>
                </div>
                {this.props.userIsAuthenticated && <Redirect to='/basket' />}
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.AuthReducer.loading,
        error: state.AuthReducer.error,
        userIsAuthenticated: state.AuthReducer.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, submitName) => dispatch(actions.auth(email, password, submitName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);