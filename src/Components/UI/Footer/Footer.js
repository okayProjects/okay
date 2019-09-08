import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';
import Logo from '../Logo/Logo';
import Button from '../Buttons/Button';
import PopUpModal from '../../UI/PopUpModal/PopUpModal';
import * as actionTypes from '../../../Store/Actions/actions';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="footer-picture-wrapper">
                    <div className="footer-logo">
                        <Logo />
                    </div>
                    <div className="footer-contact-details">
                        <div className="footer-span-wrapper">
                            <span><i className="fas fa-phone"></i>+48 500 097 398</span>
                            <span><i className="fas fa-hourglass-end"></i>Pn-So: 09:00 - 20:00</span>
                            <span><i className="fas fa-envelope"></i>k.lugowski@yahoo.com</span>
                            <span><i className="far fa-lightbulb"></i>Sprawy pilne: 24/7</span>
                        </div>
                        <div className='footer-button-wrapper'>
                            <Button btnType='linesInside' click={this.props.onModalActivator}>Wyślij wiadomość</Button>
                            <h2>Twój rozwój w nowym wymiarze</h2>
                        </div>
                    </div>
                </div>
                <PopUpModal />
            </footer>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onModalActivator: () => dispatch({ type: actionTypes.POP_UP_MODAL_ACTIVATED })
    };
};

export default connect(null, mapDispatchToProps)(Footer);