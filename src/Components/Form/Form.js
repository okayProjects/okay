import React, { Component } from 'react';
import Button from '../UI/Buttons/Button';
import './Form.css';

class Form extends Component {
    state = {
        username: '',
        usersurname: '',
        useremail: '',
        accept: false,
        formSentMessage: '',
        errors: {
            username: false,
            useremail: false,
            password: false,
            accept: false
        }
    }

    messages = {
        username: 'Nazwa musi zawierać minimum 3 znaki',
        useremail: 'Email musi zawierać @',
        usersurname: 'Nie może być krótszy niż 3 znaki',
        accept: 'Potwierdź akceptację warunków'
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.formSentMessage !== '') {
                this.setState(prevState => {
                    return { formSentMessage: prevState.formSentMessage = '' };
                });
            }
        }, 2000);
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        if (type === 'text' || type === 'email') {
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
                    useremail: '',
                    accept: false,
                    formSentMessage: 'Dziękujemy za wysłanie formularza',
                    errors: {
                        username: false,
                        useremail: false,
                        accept: false
                    }
                }
            )
        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    usersurname: !validation.usersurname,
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
        if (this.state.accept) {
            accept = true;
        }
        if (username && accept && useremail) {
            formCorrect = true;
        }
        return ({
            username,
            accept,
            useremail,
            formCorrect,
            usersurname
        })
    }

    render() {
        return (
            <div className="form">
                <h1>Wypełnij formularz</h1>
                <form onSubmit={this.submitHandler} noValidate>

                    <input type='text' name='username' placeholder='Twoje imię' value={this.state.username} onChange={this.changeHandler}></input>{this.state.errors.username && <span>{this.messages.username}</span>}

                    <input type='text' name='usersurname' placeholder='Twoje nazwisko' value={this.state.usersurname} onChange={this.changeHandler}></input>{this.state.errors.usersurname && <span>{this.messages.usersurname}</span>}


                    <input type='email' name='useremail' placeholder='Twój email' value={this.state.useremail} onChange={this.changeHandler}></input>{this.state.errors.useremail && <span>{this.messages.useremail}</span>}


                    <label>
                        <input type='checkbox' name='accept' checked={this.state.accept} onChange={this.changeHandler}></input>Zgodę wyrażam wszelaką
                    </label>
                    {this.state.errors.accept && <span>{this.messages.accept}</span>}
                    <Button btnType='offer-info-button'>Anuluj</Button>
                    <Button btnType='offer-info-button'>Wyślij</Button>
                </form>
                {this.state.formSentMessage && <h4>{this.state.formSentMessage}</h4>}
            </div>
        );
    }
}

export default Form;
