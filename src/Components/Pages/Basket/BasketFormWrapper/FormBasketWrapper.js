import React, { Component } from 'react';
import Form from '../../../UI/Form/Form';
import './FormBasketWrapper.css';

const orderForm = [
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Twoje imię',
            name: 'userName',
            id: 'userPersonalData',
            required: true,
            title: 'To pole nie może zawierać cyfr i musi mieć co najmniej 3 litery.'
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Twoje nazwisko',
            name: 'userSurname',
            id: 'userPersonalData',
            required: true,
            title: 'To pole nie może zawierać cyfr i musi mieć co najmniej 3 litery.'
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
            title: 'To pole musi mieć co najmniej 3 cyfry. Nie może zawierać liter, spacji, ani innych znaków specjalnych .'
        }
    },

    {
        elementType: 'textarea',
        elementConfiguration: {
            name: 'userComments',
            id: 'userPersonalData',
            rows: '5',
            cols: '20',
            placeholder: 'Tego pola nie musisz wypełniać, ale jeśli masz jakieś dodatkowe uwagi możesz je napisać właśnie tutaj'
        }
    },
    // {
    //     elementType: 'checkbox',
    //     elementConfiguration: {
    //         type: 'checkbox',
    //         name: 'accept',
    //         id: 'userAcceptance',
    //         required: true
    //     },
    //     label: 'Zgodę wyrażam wszelaką'
    // },
];

const workingdays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];

class FormWrapper extends Component {


    render() {

        let orderInputs = orderForm.map(item => (
            <Form
                key={item.elementConfiguration.name}
                elementType={item.elementType}
                elementConfiguration={item.elementConfiguration}
                labelId={item.elementConfiguration.id}
                label={item.label}
                value={this.props.value[item.elementConfiguration.id][item.elementConfiguration.name]}
                change={this.props.change}
                invalidStyle={this.props.invalidStyle[item.elementConfiguration.name]}
                inputTouchedByUser={this.props.value[item.elementConfiguration.id][item.elementConfiguration.name].length}
            />
        ));

        const workdays = workingdays.map(day => {
            return (
                {
                    elementType: 'workdays',
                    elementConfiguration: {
                        type: 'checkbox',
                        name: 'unavailableDays',
                        id: day,
                    },

                    elementTimeFromConfiguration: {
                        type: 'time',
                        name: 'unavailableHoursFrom',
                        min: '06:00',
                        max: '21:00',
                        id: day,
                        required: true
                    },
                    elementTimeToConfiguration: {
                        type: 'time',
                        name: 'unavailableHoursTo',
                        id: day,
                        required: true
                    },
                    label: day
                })
        }).map(item => (
            <Form
                key={item.elementConfiguration.id}
                elementType={item.elementType}
                elementConfiguration={item.elementConfiguration}
                elementTimeFromConfiguration={item.elementTimeFromConfiguration}
                elementTimeToConfiguration={item.elementTimeToConfiguration}
                label={item.label}
                checked={this.props.checkedUnavailableDays[item.elementConfiguration.id]}
                change={this.props.change}
                valueFrom={this.props.valueUnavailableHoursFrom[item.elementTimeFromConfiguration.id]}
                valueTo={this.props.valueUnavailableHoursTo[item.elementTimeToConfiguration.id]}
                disabled={!this.props.checkedUnavailableDays[item.elementConfiguration.id]}
            />
        ));

        orderInputs.splice(3, 0, <div key='kjhgfdsawertyui' className='workdays-wrapper'></div>);

        return (
            <>
                <div className='orderinputs-wrapper'>
                    {orderInputs}
                </div>
                <div className='workdays-wrapper'>
                    <h3>Zaznacz tylko te dni i czas kiedy zdecydowanie NIE możesz mieć zajęć</h3>
                    {workdays}
                    <Form elementType='checkbox' labelId='userAcceptance' label='Zgodę wyrażam wszelaką' change={this.props.change} checked={this.props.checkedUserAcceptance} elementConfiguration={
                        {
                            type: 'checkbox',
                            name: 'accept',
                            id: 'userAcceptance',
                            required: true
                        }
                    } />
                </div>
            </>
        );
    };
};

export default FormWrapper;