import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actionTypes from '../../Store/actions';
import Button from '../UI/Buttons/Button';
import './Form.css';

class Form extends Component {
    state = {
        username: '',
        usersurname: '',
        useremail: '',
        userpassword: '',
        accept: false,
        formSentMessage: '',
        redirect: false,
        errors: {
            username: false,
            useremail: false,
            userpassword: false,
            accept: false
        }
    }

    messages = {
        username: 'Nazwa musi zawierać minimum 3 znaki',
        useremail: 'Email musi zawierać @',
        userpassword: 'Hasło musi zawierać co najmnie 6 znaków',
        usersurname: 'Nie może być krótszy niż 3 znaki',
        accept: 'Potwierdź akceptację warunków'
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.formSentMessage !== '') {
                this.setState(prevState => {
                    return {
                        formSentMessage: prevState.formSentMessage = '',
                        redirect: prevState.redirect = true
                    };
                });
            }
        }, 8000);
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        if (type === 'text' || type === 'email' || type === 'password') {
            this.setState(prevState => {
                return { [name]: prevState[name] = value };
            });
        } else if (type === 'checkbox') {
            this.setState(prevState => {
                return { accept: !prevState.accept };
            });
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const validation = this.validation();

        if (validation.formCorrect) {
            this.setState(
                {
                    username: '',
                    usersurname: '',
                    userpassword: '',
                    useremail: '',
                    accept: false,
                    formSentMessage: 'Dziękujemy za wysłanie formularza',
                    errors: {
                        username: false,
                        useremail: false,
                        userpassword: false,
                        accept: false
                    }
                }
            )
        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    usersurname: !validation.usersurname,
                    userpassword: !validation.userpassword,
                    useremail: !validation.useremail,
                    accept: !validation.accept
                }
            })
        }

    }

    validation = () => {
        let useremail = false;
        let username = false;
        let usersurname = false;
        let userpassword = false;
        let accept = false;
        let formCorrect = false;

        if (this.state.username.length >= 3 && this.state.username.indexOf(' ') === -1) {
            username = true;
        }
        if (this.state.usersurname.length >= 3 && this.state.username.indexOf(' ') === -1) {
            usersurname = true;
        }
        if (this.state.useremail.indexOf('@') !== -1) {
            useremail = true;
        }
        if (this.state.userpassword.length >= 6) {
            userpassword = true;
        }
        if (this.state.accept) {
            accept = true;
        }
        if (username && accept && useremail && userpassword) {
            formCorrect = true;
        }
        return ({
            username,
            accept,
            useremail,
            formCorrect,
            usersurname,
            userpassword
        });
    };

    render() {

        let style = ['form'];
        if (this.state.formSentMessage !== '') {
            style = ['form', ['none']].join(' ');
        }

        // if (this.state.redirect) {
        //     this.props.onClearOrderAfterFormSent();
        // }
        return (
            <div className={style}>
                <h1>Wypełnij formularz</h1>
                <form onSubmit={this.submitHandler} noValidate>

                    <input type='text' name='username' placeholder='Twoje imię' value={this.state.username} onChange={this.changeHandler}></input>{this.state.errors.username && <span>{this.messages.username}</span>}

                    <input type='text' name='usersurname' placeholder='Twoje nazwisko' value={this.state.usersurname} onChange={this.changeHandler}></input>{this.state.errors.usersurname && <span>{this.messages.usersurname}</span>}


                    <input type='email' name='useremail' placeholder='Twój email' value={this.state.useremail} onChange={this.changeHandler}></input>{this.state.errors.useremail && <span>{this.messages.useremail}</span>}

                    <input type='password' name='userpassword' placeholder='Twóje hasło' value={this.state.userpassword} onChange={this.changeHandler}></input>{this.state.errors.userpassword && <span>{this.messages.userpassword}</span>}


                    <label>
                        <input type='checkbox' name='accept' checked={this.state.accept} onChange={this.changeHandler}></input>Zgodę wyrażam wszelaką
                    </label>
                    {this.state.errors.accept && <span>{this.messages.accept}</span>}
                    <div className='form-button-wrapper'>
                        <Button btnType='offer-info-button'>Anuluj</Button>
                        <Button btnType='offer-info-button'>Wyślij</Button>
                    </div>
                </form>
                {this.state.formSentMessage && <h4>{this.state.formSentMessage}</h4>}
                {this.state.redirect && <Redirect to='/offer' />}
            </div>
        );
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onClearOrderAfterFormSent: () => dispatch({ type: actionTypes.CLEAR_BASKET_AFTER_FORM_SENT })
//     }
// }

export default Form;
