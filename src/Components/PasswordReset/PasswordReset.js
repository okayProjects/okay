import React, { Component } from 'react';
import Button from '../UI/Buttons/Button';
import Form from '../UI/Form/Form';
import Logo from '../UI/Logo/Logo';
import Navigation from '../Navigation/NavWrapper/NavWrapper';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './PasswordReset.css';

class PasswordReset extends Component {

    state = {
        email: '',
        resetEmailSent: false,
        redirect: false,
        error: false
    }

    inputChangeHandler = (e) => {
        const value = e.target.value;
        this.setState(prevState => {
            return { email: prevState.email = value };
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            requestType: 'PASSWORD_RESET'
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDqXRGtk89y42bnG1oXz7jqGB149y3oye4', data)
            .then(res => {
                if (res.request.status) {
                    this.setState(prevState => {
                        return { resetEmailSent: prevState.resetEmailSent = true };
                    });
                }
            })
            .catch(err => {
                if (err) {

                    this.setState(prevState => {
                        return { error: prevState.error = true };
                    });
                }
            });
    };

    redirectHandler = () => {
        this.setState(prevState => {
            return { redirect: prevState.redirect = true };
        });
    }

    // componentDidUpdate() {
    //     setTimeout(() => {
    //         if (this.state.resetEmailSent) {
    //             this.setState({
    //                 redirect: true
    //             });
    //         };
    //     }, 6000);
    // }

    render() {

        const inputType = [{
            elementType: 'input',
            elementConfiguration: {
                type: 'email',
                placeholder: 'Twój adres email',
                name: 'passResetEmail',
            }
        }];

        const passResetInput = inputType.map(input => (
            <Form key={input.elementConfiguration.name}
                elementType={input.elementType}
                elementConfiguration={input.elementConfiguration}
                value={this.state.email}
                change={this.inputChangeHandler}
            />
        ));

        let message = (
            <><p>Link do zmiany hasła został wysłany na</p>
                <span>{this.state.email}</span>
                <span>Po zalogowaniu się do swojej poczty i zmianie hasła Twoje konto znów będzie aktywne.</span></>)
        if (this.state.error) {
            message = (
                <><p>Uppppps. Coś poszło nie tak!</p>
                    <span>Nie możemy teraz zresetować tego hasła.</span>
                    <span>Spróbuj później.</span></>)
        }

        let passResetEmailMessage = (
            <div className='basket-sent-message-wrapper'>
                <div className='logo-basket-wrapper'>
                    <Logo />
                </div>
                <div>
                    {message}
                </div>
                <Button btnType='offer-info-button' click={this.redirectHandler}>Okay</Button>
            </div>)

        return (
            <>
                <Navigation />
                <div className='passreset'>
                    {this.state.resetEmailSent || this.state.error ? passResetEmailMessage :
                        <div className='passreset-form'>
                            <div>
                                <span>Podaj swój adres email</span>
                            </div>
                            <form onSubmit={this.submitHandler}>
                                {passResetInput}
                                <Button btnType='offer-info-button'>Wyślij</Button>
                            </form>
                        </div>}
                    {this.state.redirect && <Redirect to='/auth' />}
                </div>
            </>
        );
    }

};

export default PasswordReset;