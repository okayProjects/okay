import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionTypes from '../../../Store/Actions/actions';
import * as actions from '../../../Store/Actions/actionsIndex';
import Button from '../../UI/Buttons/Button';
import Navigation from '../../Navigation/NavWrapper/NavWrapper';
import './Basket.css';
import FormBasketWrapper from '../Basket/BasketFormWrapper/FormBasketWrapper';
import Logo from '../../UI/Logo/Logo';
import { checkValidity } from '../../UI/SharedFunctions/checkValidity';
import Footer from '../../UI/Footer/Footer';


class Basket extends Component {

    state = {
        formSubmittedMessage: false,
        redirect: false,
        userAcceptance: false,
        user: {
            userPersonalData: {
                userName: '',
                userSurname: '',
                userTelephoneNumber: '',
                userComments: '',
            },
            unavailableDays: {
                poniedziałek: false,
                wtorek: false,
                środa: false,
                czwartek: false,
                piątek: false,
                sobota: false
            },
            unavailableHoursFrom: {
                poniedziałek: '',
                wtorek: '',
                środa: '',
                czwartek: '',
                piątek: '',
                sobota: ''
            },
            unavailableHoursTo: {
                poniedziałek: '',
                wtorek: '',
                środa: '',
                czwartek: '',
                piątek: '',
                sobota: '',
            }
        }, validation: {
            userName: false,
            userSurname: false,
            userTelephoneNumber: false
        }
    };


    inputHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const id = e.target.id;

        if (id === 'userPersonalData') {

            const updatedUser = {
                ...this.state.user,
                [id]: {
                    ...this.state.user[id],
                    [name]: value,
                }
            };

            const validation = {
                ...this.state.validation,
                [name]: checkValidity(value, name)
            };

            this.setState({
                user: updatedUser,
                validation
            });
        } if (name === 'unavailableDays') {
            const updatedUser = {
                ...this.state.user,
                [name]: {
                    ...this.state.user[name],
                    [id]: !this.state.user.unavailableDays[id]
                }
            };
            this.setState({ user: updatedUser });
        } if (name === 'unavailableHoursFrom' || name === 'unavailableHoursTo') {
            const updatedUser = {
                ...this.state.user,
                [name]: {
                    ...this.state.user[name],
                    [id]: value
                }
            };
            this.setState({ user: updatedUser });
        } if (id === 'userAcceptance') {
            this.setState(prevState => {
                return { userAcceptance: !prevState.userAcceptance };
            });
        }
    };

    submitOrderHandler = (e) => {
        e.preventDefault();

        const orderData = {
            client: this.state.user,
            order: this.props.orderedCourses,
            dateOfPurchasing: new Date().toISOString().slice(0, 10),
            timeOfPurchasing: new Date().toISOString().slice(11, 19),
            userId: this.props.userId
        };

        if (this.state.validation.userName && this.state.validation.userSurname && this.state.validation.userTelephoneNumber) {
            this.props.onOrderSubmitForm(orderData, this.props.token);

            const user = {
                ...this.state.user,
                userPersonalData: {
                    ...this.state.user.userPersonalData,
                    userName: '',
                    userSurname: '',
                    userTelephoneNumber: '',
                    userComments: '',
                },
                unavailableDays: {
                    ...this.state.user.unavailableDays,
                    poniedziałek: false,
                    wtorek: false,
                    środa: false,
                    czwartek: false,
                    piątek: false,
                    sobota: false
                },
                unavailableHoursFrom: {
                    ...this.state.user.unavailableHoursFrom,
                    poniedziałek: '',
                    wtorek: '',
                    środa: '',
                    czwartek: '',
                    piątek: '',
                    sobota: ''
                },
                unavailableHoursTo: {
                    ...this.state.user.unavailableHoursTo,
                    poniedziałek: '',
                    wtorek: '',
                    środa: '',
                    czwartek: '',
                    piątek: '',
                    sobota: '',
                }
            };

            const validation = {
                ...this.state.validation,
                userName: false,
                userSurname: false,
                userTelephoneNumber: false
            }

            this.setState({
                formSubmittedMessage: true,
                userAcceptance: false,
                user,
                validation
            });
            this.props.onClearOrderBasket();
        } else return
    };

    redirectHandler = () => {
        this.setState(prevState => {
            return { redirect: prevState.redirect = true };
        });
    };

    // componentDidUpdate() {
    //     setTimeout(() => {
    //         if (this.state.formSubmittedMessage) {
    //             this.setState({
    //                 formSubmittedMessage: false,
    //                 formSubmitted: true
    //             });
    //         };
    //     }, 12000);
    // };

    render() {

        const allPrices = [0];
        this.props.orderedCourses.forEach(course => allPrices.push(course.price))

        const totalPrice = allPrices.reduce((arr, ell) => {
            if (typeof (ell) === 'string') {
                ell = 0;
                return arr + ell;
            } else return arr + ell
        });

        const courses = this.props.orderedCourses.map(course => {
            return (
                <div key={course.id} className='single-course-wrapper'>
                    <div>
                        <h1>Zamawiasz {course.name}</h1>
                        <span>{`Cena tego kursu to ${course.price}`}</span>
                        <p>Uwaga. Zapłacisz dopiero po potwierdzeniu dostępności terminu.</p>
                    </div>
                    <div className='basket-button-wrapper'>
                        <Button click={() => this.props.onRemoveCourseFromBasket(course.id)} btnType='offer-info-button'>Usuń ten kurs</Button>
                    </div>
                </div>
            );
        });

        let basketMessage = (
            <>
                <div className='basket-empty-message'>
                    <div className='logo-empty-basket-message' ><Logo /></div>
                    <h3>Twój koszyk jest pusty</h3>
                    <h5>Wybierz swój kurs</h5>
                </div>
            </>
        );
        if (this.state.formSubmittedMessage) {
            basketMessage = (
                <div className='basket-sent-message-wrapper'>
                    <div className='logo-basket-wrapper'>
                        <Logo />
                    </div>
                    <div>
                        <p>Dziękuję za złożone zamówienie.</p>
                        <span>Już nad nim pracuję.</span>
                        <span>Spodziewaj się kontaku w mniej niż 24 godziny.</span>
                    </div>
                    <Button btnType='offer-info-button' click={this.redirectHandler}>Okay</Button>
                </div>
            );
        };

        let basket = (
            <main>
                <div className='basket-wrapper'>
                    <Navigation />
                    {this.props.orderedCourses.length <= 0 ? basketMessage :
                        <div className='basket-form-wrapper'>
                            <div>
                                <p>Wypełnij formularz kursanta</p>
                                <p>{`Cena całkowita: ${totalPrice}`}</p>
                            </div>
                            {courses}
                            <form onSubmit={this.submitOrderHandler} className='basket-form'>
                                <FormBasketWrapper
                                    value={this.state.user}
                                    valueUnavailableHoursFrom={this.state.user.unavailableHoursFrom}
                                    valueUnavailableHoursTo={this.state.user.unavailableHoursTo}
                                    change={this.inputHandler}
                                    checkedUnavailableDays={this.state.user.unavailableDays}
                                    checkedUserAcceptance={this.state.userAcceptance}
                                    invalidStyle={this.state.validation}
                                />
                                <div className='basketform-button-wrapper'>
                                    <Button btnType='offer-info-button'>Zamawiam wybrane kursy</Button>
                                </div>
                            </form>
                        </div>}
                    {this.state.redirect && <Redirect to='/offer' />}
                </div>
            </main>
        );

        if (!this.props.userIsAuthenticated && this.props.orderedCourses.length > 0) {
            basket = <Redirect to='/auth' />
        };

        return (
            <>
                <main>
                    {basket}
                </main>
                <Footer />
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        orderedCourses: state.GEReducer.orders.concat(state.B2BReducer.orders, state.AbroadReducer.orders),
        token: state.AuthReducer.token,
        userIsAuthenticated: state.AuthReducer.token !== null,
        userId: state.AuthReducer.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCourseFromBasket: (id) => dispatch({ type: actionTypes.REMOVE_COURSE_FROM_BASKET, id: id }),
        onClearOrderBasket: () => dispatch({ type: actionTypes.CLEAR_BASKET }),
        onOrderSubmitForm: (orderData, token) => dispatch(actions.orderFormSubmit(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);