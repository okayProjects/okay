import React, { Component } from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import Button from '../Buttons/Button';
import PopUpModal from '../../UI/PopUpModal/PopUpModal';

class Footer extends Component {

    state = {
        modalActive: false
    }

    modalActivatorHandler = () => {
        this.setState(prevState => {
            return { modalActive: prevState.modlaActive = true };
        });
    };

    render() {
        return (
            <footer>
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
                        <div className='footer-button-wrapper'>
                            <Button btnType='linesInside' click={this.modalActivatorHandler}>Wyślij wiadomość</Button>
                            <h2>Twój rozwój w nowym wymiarze</h2>
                        </div>
                    </div>
                </div>
                <PopUpModal modalActive={this.state.modalActive} />
            </footer>
        );
    };
};

export default Footer;