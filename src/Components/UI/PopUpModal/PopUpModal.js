import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PopUpModal.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Button from '../../UI/Buttons/Button';
import axios from 'axios';
import { checkValidity } from '../SharedFunctions/checkValidity';
import * as actionTypes from '../../../Store/Actions/actions';

const form = [
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Twoje imię i nazwisko',
            name: 'userName',
            id: 'userPersonalData',
            required: true,
            title: 'To pole nie może zawierać cyfr i musi mieć co najmniej 6 znaków.'
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'email',
            placeholder: 'Twój email',
            name: 'userEmail',
            id: 'userPersonalData',
            required: true,
            title: 'To pole musi mieć format "nazwa@nazwa.domena".'
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'tel',
            placeholder: 'Twój numer telefonu',
            name: 'userTelephoneNumber',
            id: 'userPersonalData',
            required: true,
            title: 'To pole musi mieć co najmniej 9 cyfry. Nie może zawierać liter, spacji, ani innych znaków specjalnych.'
        }
    },

    {
        elementType: 'textarea',
        elementConfiguration: {
            name: 'modalComments',
            id: 'userPersonalData',
            rows: '5',
            cols: '20',
            placeholder: 'Swoje uwagi możesz napisać tutaj',
            required: true,
            title: 'To pole musi mieć co najmniej 5 liter'
        }
    }
];

class PopUpModal extends Component {

    state = {
        userName: '',
        userEmail: '',
        userTelephoneNumber: '',
        modalComments: '',
        validation: {
            userName: false,
            userEmail: false,
            userTelephoneNumber: false,
            modalComments: false
        }
    };

    inputHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        const validation = {
            ...this.state.validation,
            [name]: checkValidity(value, name)
        };

        this.setState(prevState => {
            return {
                [name]: prevState[name] = value,
                validation
            };
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const data = {
            Imię: this.state.userName,
            Telefon: this.state.userTelephoneNumber,
            Email: this.state.userEmail,
            Komentarz: this.state.modalComments
        };

        if (this.state.validation.userEmail && this.state.validation.userName & this.state.validation.userTelephoneNumber && this.state.validation.modalComments) {
            axios.post('https://okay-school.firebaseio.com/comments.json', data)
                .then(res => {
                    if (res.request.statusText === 'OK') {
                        this.setState(prevState => {
                            return {
                                userName: prevState.userName = '',
                                userEmail: prevState.userEmail = '',
                                userTelephoneNumber: prevState.userTelephoneNumber = '',
                                userComments: prevState.userComments = '',
                            };
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else return;
        this.props.onModalDisactivator();
    };

    render() {

        const popUpModalForm = form.map(item => (
            <Form
                key={item.elementConfiguration.name}
                elementType={item.elementType}
                elementConfiguration={item.elementConfiguration}
                change={this.inputHandler}
                inputTouchedByUser={this.state[item.elementConfiguration.name].length}
                invalidStyle={this.state.validation[item.elementConfiguration.name]}
            />
        ));

        let modalClasses = ['modal-wrapper'];
        if (this.props.modalActive) {
            modalClasses = ['modal-wrapper', 'active'];
        }
        else {
            modalClasses = ['modal-wrapper'];
        };

        return (
            <div className={modalClasses.join(' ')}>
                <div className="modal-picture-wrapper">
                    <div className="modal-picture-slogan">
                        <Logo />
                    </div>
                    <div className="modal-contact-details">
                        <div className="modal-span-wrapper">
                            <span><i className="fas fa-phone"></i>+48 500 097 398</span>
                            <span><i className="fas fa-hourglass-end"></i>Pn-So: 09:00 - 20:00</span>
                            <span><i className="fas fa-envelope"></i>k.lugowski@yahoo.com</span>
                            <span><i className="far fa-lightbulb"></i>Sprawy pilne: 24/7</span>
                        </div>
                        <h2>Twój rozwój w nowym wymiarze</h2>
                    </div>
                </div>
                <div className="modal-form-wrapper">
                    <form onSubmit={this.submitHandler}>
                        {popUpModalForm}
                        <div >
                            <Button btnType='offer-info-button' click={this.props.onModalDisactivator}>Anuluj</Button>
                            <Button btnType='offer-info-button'>Wyślij</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        modalActive: state.PopUpModalControllerReducer.modalActive
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onModalDisactivator: () => dispatch({ type: actionTypes.POP_UP_MODAL_DISACTIVATED })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUpModal);