import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions/actions';
import * as actions from '../../../Store/Actions/actionsIndex';
import Button from '../../UI/Buttons/Button';
import Navigation from '../../Navigation/NavWrapper/NavWrapper';
import './Basket.css';
import Form from '../../UI/Form/Form';
import Spinner from '../../UI/Spinner/Spinner';


const orderForm = [
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Twoje imię',
            name: 'userName',
            required: true
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'text',
            placeholder: 'Twoje nazwisko',
            name: 'userSurname',
            required: true
        }
    },
    {
        elementType: 'input',
        elementConfiguration: {
            type: 'tel',
            placeholder: 'Twój numer telefonu',
            name: 'userTelephoneNumber',
            required: true
        }
    },

    {
        elementType: 'textarea',
        elementConfiguration: {
            name: 'userComments',
            rows: '5',
            cols: '20',
            placeholder: 'Tego pola nie musisz wypełniać, ale jeśli masz jakieś dodatkowe uwagi możesz je napisać właśnie tutaj'
        }
    },
    {
        elementType: 'checkbox',
        elementConfiguration: {
            type: 'checkbox',
            name: 'accept',
            id: 'userAcceptance',
            required: true
        },
        label: 'Zgodę wyrażam wszelaką'
    },
];

const workingdays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];

class Basket extends Component {

    state = {
        user: {
            userName: '',
            userSurname: '',
            userTelephoneNumber: '',
            userComments: '',
            userAcceptance: false,
            poniedziałek: false,
            wtorek: false,
            środa: false,
            czwartek: false,
            piątek: false,
            sobota: false,
            poniedziałekFrom: '00:00',
            wtorekFrom: '',
            środaFrom: '',
            czwartekFrom: '',
            piątekFrom: '',
            sobotaFrom: '',
            poniedziałekTo: '',
            wtorekTo: '',
            środaTo: '',
            czwartekTo: '',
            piątekTo: '',
            sobotaTo: '',
            test: '12:00'
        }
    }


    inputHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const type = e.target.type;
        const id = e.target.id;

        if (type === 'text' || type === 'tel' || name === 'userComments' || type === 'time' || name === 'test') {
            const user = {
                ...this.state.user,
                [name]: value
            };
            this.setState({ user });
        } if (id === 'userAcceptance' || name === 'day') {
            const user = {
                ...this.state.user,
                [id]: !this.state.user[id]
            };
            this.setState({ user });
        }
    };

    submitOrderHandler = (e) => {
        e.preventDefault();
        let client = [];
        for (let key in this.state.user) {
            if (this.state.user[key] !== '' && this.state.user[key]) {
                client.push({
                    [key]: this.state.user[key]
                });
            };
        };

        const order = []
        for (let key in this.props.orderedCourses) {
            order.push({
                CourseName: this.props.orderedCourses[key].name,
                CourseId: this.props.orderedCourses[key].id,
                CoursePrice: this.props.orderedCourses[key].price
            });
        };

        const orderData = {
            client,
            order
        };

        this.props.onOrderSubmitForm(orderData);

        // axios.post('https://okay-school.firebaseio.com/orders.json', order)
        //     .then(res => {
        //         if (res.request.statusText === 'OK') {
        //             const user = {
        //                 ...this.state.user,
        //                 userName: '',
        //                 userSurname: '',
        //                 userTelephoneNumber: '',
        //                 userComments: '',
        //                 userAcceptance: false,
        //                 poniedziałek: false,
        //                 wtorek: false,
        //                 środa: false,
        //                 czwartek: false,
        //                 piątek: false,
        //                 sobota: false,
        //                 poniedziałekFrom: '00:00',
        //                 wtorekFrom: '00:00',
        //                 środaFrom: '00:00',
        //                 czwartekFrom: '00:00',
        //                 piątekFrom: '00:00',
        //                 sobotaFrom: '00:00',
        //                 poniedziałekTo: '00:00',
        //                 wtorekTo: '00:00',
        //                 środaTo: '00:00',
        //                 czwartekTo: '00:00',
        //                 piątekTo: '00:00',
        //                 sobotaTo: '00:00',
        //             };
        //             this.setState({ user });
        //             this.props.onClearOrderAfterFormSent();
        //         };
        //     });
    };



    render() {
        const allPrices = [0];
        this.props.orderedCourses.forEach(course => allPrices.push(course.price))

        const totalPrice = allPrices.reduce((arr, ell) => {
            return arr + ell;
        });

        const courses = this.props.orderedCourses.map(course => {
            return (
                <div key={course.id} className='basket'>
                    <h1>Zamawiasz {course.name}</h1>
                    <span>{`Cena tego kursu to ${course.price} PLN`}</span>
                    <Button click={() => this.props.onRemoveCourseFromBasket(course.id)} btnType='offer-info-button'>Usuń</Button>
                </div>
            );
        });


        let orderInputs = orderForm.map(item => (
            <Form
                key={item.elementConfiguration.name}
                elementType={item.elementType}
                elementConfiguration={item.elementConfiguration}
                labelId={item.elementConfiguration.id}
                label={item.label}
                value={this.state.user[item.elementConfiguration.name]}
                change={this.inputHandler}
                checked={this.state.user.userAcceptance}
            />
        ));

        const workdays = workingdays.map(day => {
            return (
                {
                    elementType: 'workdays',
                    elementConfiguration: {
                        type: 'checkbox',
                        name: 'day',
                        id: day,
                    },

                    elementTimeFromConfiguration: {
                        type: 'time',
                        name: day + 'From',
                        min: '06:00',
                        max: '21:00',
                        id: day,
                    },
                    elementTimeToConfiguration: {
                        type: 'time',
                        name: day + 'To',
                        id: day,
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
                checked={this.state.user[item.elementConfiguration.id]}
                change={this.inputHandler}
                valueFrom={this.state.user[item.elementTimeFromConfiguration.name]}
                valueTo={this.state.user[item.elementTimeToConfiguration.name]}
                disabled={!this.state.user[item.elementConfiguration.id]}
            />
        ));

        orderInputs.splice(3, 0, <div key='kjhgfdsawertyui' className='workdays-wrapper'>{workdays}</div>);


        return (
            <div className='basket-wrapper'>
                <Navigation />
                {courses}
                {this.props.orderedCourses.length > 0 && <h2>{`Wrtość całkowita wszystkich zamówionych kursów to ${totalPrice}PLN`}</h2>}
                {this.props.orderedCourses.length <= 0 ? <h1>Twój koszyk jest pusty</h1> : <div className='basket-form-wrapper'>
                    <h1>Wypełnij formularz kursanta</h1>
                    <form onSubmit={this.submitOrderHandler}>
                        {this.props.submitting ? <Spinner /> : orderInputs}
                        <div className='basketform-buttons-wrapper'>
                            <Button btnType='offer-info-button'>Zamawiam</Button>
                        </div>
                    </form>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderedCourses: state.GEReducer.orders.concat(state.B2BReducer.orders, state.AbroadReducer.orders),
        submitting: state.OrderSubmitReducer.submitting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCourseFromBasket: (id) => dispatch({ type: actionTypes.REMOVE_COURSE_FROM_BASKET, id: id }),
        onClearOrderAfterFormSent: () => dispatch({ type: actionTypes.CLEAR_BASKET_AFTER_FORM_SENT }),
        onOrderSubmitForm: (orderData) => dispatch(actions.orderFormSubmit(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);