import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import * as actionTypes from '../../../Store/Actions/actions';

class About extends Component {

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
                    <i className="fas fa-graduation-cap"></i>
                    <h2>dla nastolatków</h2>
                    <p>To skrojone wyłącznie na Twoją miarę zajęcia językowe z dojazdem do ucznia. W przyjaznej atmosferze swojego domu opanujesz język bez stresu i przełamiesz lęk przed mówieniem po angielsku, a dzięki lekcjom typu one-to-one masz pewność, że lektor jest wyłącznie dla Ciebie. Wszystkie zajęcia prowadzone są przy pomocy multimediów.
                </p>
                </div>
                <div className="offer-two">
                    <i className="far fa-calendar-check"></i>
                    <h2>do egzaminów</h2>
                    <p>Czy to sprawdzian po ósmej klasie, czy może matura, nieważne! Wspólnie opracujemy strategie egzaminacyjne, nadrobimy zaległości, utrwalimy materiał. Zajęcia z dojazdem do domu, na których rozwiniesz wszystkie sprawności językowe w oparciu o zadania zgodne z wymaganiami Centralnej Komisji Egzaminacyjnej.
                </p>
                </div>
                <div className="offer-three">
                    <i className="fas fa-users"></i>
                    <h2>dla dorosłych</h2>
                    <p>Postanowione – chcesz mówić po angielsku. Masz dość niepowodzeń. Nieważne, że kolejny raz podchodzisz do nauki języka. A może dopiero szukasz kursu dla dorosłych. Dzięki odpowiednio dobranemu programowi nauczania oraz metodom dostosowanym do wieku i aktualnego poziomu studentów szybko zaczniesz być niezależny językowo. Bo liczy się komunikatywność!
                </p>
                </div>
                <div className="offer-four">
                    <i className="fas fa-briefcase"></i>
                    <h2>dla biznesu</h2>
                    <p>Tylko szyte na miarę kursy biznesowego języka angielskiego. Zawsze poprzedzone analizą indywidualnych potrzeb językowych każdej firmy. Elastyczne i dopasowane do charakteru prowadzonego biznesu, uwzględniające indywidualne potrzeby pracowników. Językowe wsparcie dla eventów bizesowych typu konferencje, prezentacje, sympozja.
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
                        <Button btnType='linesInside' click={this.props.onModalActivator}>Więcej</Button>
                    </div>
                </div>
                <div className="photo-two-wrapper">
                    <img src={photoTwo} alt="businessPeopleWorking" />
                    <div>
                        <h3>profesjonalizmem</h3>
                        <Button btnType='linesInside' click={this.props.onModalActivator}>Więcej</Button>
                    </div>
                </div>
            </section>
        );

        const sectionThree = (
            <section data-section='three' className="s3">
                <div className="s3-left-wrapper">
                    <div></div>
                    <div>
                        <h3>Więcej niż lekcja
                    </h3>
                        <h4>Profesjonalnie, z pasją</h4>
                        <p>Moi kursanci to osoby wymagające, dla których ważny jest osobisty rozwój, podnoszenie swoich kwalifikacji oraz poczucie, że dobrze zainwestowali swój czas. Dzięki nieustannemu dbaniu o osobisty rozwój poparty międzynarodowymi certyfikatami, takimi jak Certificate of Proficiency in English (University of Cambridge ESOL Examinations), czy First Certificate for Teachers of Business English zdanemu w Londyńskiej Izbie Przemysłowo-Handlowej, mogę zaproponować swoim kursantom sesje z elementami pracy coachingowej z jasno i skutecznie zdefiniowanymi celami językowymi.
                    </p>
                        <Button btnType='linesInside' click={this.props.onModalActivator}>Więcej</Button>
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
                    <p>Chcę więcej<span className="modal-activator" onClick={this.props.onModalActivator}>...</span></p>
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
                <PopUpModal />
            </div>
        );
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onModalActivator: () => dispatch({ type: actionTypes.POP_UP_MODAL_ACTIVATED })
    };
};

export default connect(null, mapDispatchToProps)(About);