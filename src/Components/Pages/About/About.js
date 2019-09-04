import React, { Component } from 'react';
import Navigation from '../../Navigation/NavWrapper/NavWrapper';
import photoOne from '../../../images/s2/photo-one.jpg';
import photoTwo from '../../../images/s2/photo-two.jpg';
import Button from '../../UI/Buttons/Button';
import logoWielton from '../../../images/logos/logowielton.jpg';
import logoPfleiderer from '../../../images/logos/logopfleiderer.jpg';
import logoTopline from '../../../images/logos/logotopline.jpg';
import logoMeblosiek from '../../../images/logos/logomeblosiek.jpg';
import logoHelvetia from '../../../images/logos/logohelvetia.jpg';
import img1 from '../../../images/hero/ge.jpg';
import img2 from '../../../images/hero/business.jpg';
import img3 from '../../../images/hero/abroad.jpg';
import Footer from '../../UI/Footer/Footer';
import './About.css';
import $ from 'jquery';
import PopUpModal from '../../UI/PopUpModal/PopUpModal';

class About extends Component {
    state = {
        modalActive: false
    }

    componentDidMount() {
        this.sectionsApearingOnScroll();
        this.headerAnimation();
    };

    headerAnimation() {
        const myDocument = $(document);
        const header = $('header');

        myDocument.on('scroll', function () {
            const scrollCurrentPosition = myDocument.scrollTop();
            const headerHeight = header.outerHeight();
            header.css({
                // 'opacity': 1 - scrollCurrentPosition / headerHeight,
                'filter': 'grayscale(' + 2 * scrollCurrentPosition / headerHeight + ')'
            });
        });
    };

    sectionsApearingOnScroll() {
        $(document).on('scroll', function () {
            //rightBottomArrowActivator
            const windowHeight = $(window).height();
            const currentScrollValue = $(this).scrollTop();
            const arrow = $('.arrow');
            const s1 = $('.s1');
            const s1Height = s1.height();
            const s1FromTop = s1.offset().top;

            if (currentScrollValue > s1Height + s1FromTop - windowHeight) {
                arrow.addClass('visible');
            } else {
                arrow.removeClass('visible');
            };

            // offer

            if (currentScrollValue > s1Height + s1FromTop - windowHeight / .8) {
                $('.offer-one, .offer-two, .offer-three, .offer-four')
                    .addClass('activated');
            };

            // s2 left/right pictures

            const s2 = $('.s2');
            const s2Height = s2.height();
            const s2FromTop = s2.offset().top;

            if (currentScrollValue > s2Height + s2FromTop - windowHeight * 1.3) {
                $('.s2 .photo-one-wrapper, .s2 .photo-two-wrapper')
                    .addClass('activated');
            }

            // s3 clients' logos

            const s3 = $('.s3');
            const s3Height = s3.height();
            const s3FromTop = s3.offset().top;

            if (currentScrollValue > s3Height + s3FromTop - windowHeight * 1.3) {
                $('.s3-right-wrapper .logo-wrapper img')
                    .addClass('activated');
            }
        });
    };

    modalActivatorHandler = () => {
        this.setState(prevState => {
            return { modalActive: prevState.modalActive = true };
        });
    };

    render() {

        const header = (
            <header>
                <img src={img1} alt='hero1' />
                <img src={img2} alt='hero2' />
                <img src={img3} alt='hero3' />
                <div>
                    <h1>Dla dzieci, młodzieży i dorosłych</h1>
                    <h2>Wygodnie z dojazdem do domu</h2>
                </div>
                <div>
                    <h1>Angielski dla biznesu</h1>
                    <h2>Profesjonalnie i elastycznie</h2>
                </div>
                <div>
                    <h1>Kursy w Anglii</h1>
                    <h2>Połączenie relaksu i praktyki</h2>
                </div>
            </header>
        );

        const sectionOne = (
            <section data-section='introduction' className="s1">
                <div className="offer-one">
                    <i className="fa fa-globe"></i>
                    <h2>Myśląc globalnie</h2>
                    <p>Lorem ipsum dolorsit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam
                        provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis
                        error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet,
                        consectetur
                </p>
                </div>
                <div className="offer-two">
                    <i className="fa fa-project-diagram"></i>
                    <h2>bespoke projects</h2>
                    <p>Lorem ipsum dolorsit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam
                        provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis
                        error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet,
                        consectetur
                </p>
                </div>
                <div className="offer-three">
                    <i className="fa fa-dove"></i>
                    <h2>with passion</h2>
                    <p>Lorem ipsum dolorsit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam
                        provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis
                        error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet,
                        consectetur
                </p>
                </div>
                <div className="offer-four">
                    <i className="fa fa-business-time"></i>
                    <h2>B2B cooperation</h2>
                    <p>Lorem ipsum dolorsit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam
                        provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis
                        error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet,
                        consectetur
                </p>
                </div>
            </section>
        );

        const sectionTwo = (
            <section data-section='two' className="s2">
                <div className="photo-one-wrapper">
                    <img src={photoOne} alt="hands" />
                    <div>
                        <h3>napędzany pasją i</h3>
                        <Button btnType='linesInside' click={this.modalActivatorHandler}>Więcej</Button>
                    </div>
                </div>
                <div className="photo-two-wrapper">
                    <img src={photoTwo} alt="businessPeopleWorking" />
                    <div>
                        <h3>profesjonalizmem</h3>
                        <Button btnType='linesInside' click={this.modalActivatorHandler}>Więcej</Button>
                    </div>
                </div>
                {/* <div class="statistics">
                    <div>
                        <i class="fa fa-graduation-cap"></i>
                        <p>101</p>
                        <h4>successful projects</h4>
                    </div>
                    <div>
                        <i class="far fa-calendar-check"></i>
                        <p>101</p>
                        <h4>kept deadlines</h4>
                    </div>
                    <div>
                        <i class="fa fa-users"></i>
                        <p>101</p>
                        <h4>happy clients</h4>
                    </div>
                </div> */}
            </section>
        );

        const sectionThree = (
            <section data-section='three' className="s3">
                <div className="s3-left-wrapper">
                    <div></div>
                    <div>
                        <h3>Więcej niż lekcja
                    </h3>
                        <h4>With love, With care</h4>
                        <p>With a talented team of skilled professionals, we are adept in a multitude of technologies,
                            platforms, programming languages and software tools. At okayProjects, we continuously
                            innovate
                            by learning and adopting latest industry trends and technologies. From web designing to mobile
                            application development, we have proficiency in managing a number of complex projects.
                    </p>
                        <Button btnType='linesInside' click={this.modalActivatorHandler}>Więcej</Button>
                    </div>
                </div>
                <div className="s3-right-wrapper">
                    <div className="clients">
                        <h2>współpracujemy z</h2>
                    </div>
                    <div className='logo-wrapper'>
                        <img src={logoHelvetia} alt="helvetia" />
                        <img src={logoMeblosiek} alt="meblosiek" />
                        <img src={logoPfleiderer} alt="pfleiderer" />
                        <img src={logoTopline} alt="topline" />
                        <img src={logoWielton} alt="wielton" />
                    </div>
                </div>
            </section>
        );

        const sectionFive = (
            <section data-section='five' className="s5">
                <div>
                    <p>Chcę więcej<span className="modal-activator" onClick={this.modalActivatorHandler}>...</span></p>
                </div>
            </section>
        );

        return (
            <div className='about'>
                <Navigation />
                {header}
                <main>
                    {sectionOne}
                    {sectionTwo}
                    {sectionFive}
                    {sectionThree}
                </main>
                <Footer />
                <PopUpModal modalActive={this.state.modalActive} />
            </div>
        );
    };
};

export default About;