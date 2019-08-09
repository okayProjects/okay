import React from 'react';
import { Link } from 'react-router-dom';
import NavWrapper from '../../../Navigation/NavWrapper/NavWrapper';
import './OfferList.css';
import geImg from '../../../../images/offer/ge.jpg';
import businessImg from '../../../../images/offer/business.jpg';
import abroadImg from '../../../../images/offer/abroad.jpg';
import Button from '../../../UI/Buttons/Button';


const offerList = [{ type: 'angielski ogólny', src: geImg, slogan: 'kursy indywidualne i grupowe, matura i egzamin po ósmej klasie' }, { type: 'angielski dla firm', src: businessImg, slogan: 'kursy indywidualne, grupowe i te "szyte na miarę" ' }, { type: 'angielski za granicą', src: abroadImg, slogan: "wakacje w Anglii - nauka poprzez relax międzynarodowej grupie" }];



const Offer = (props) => {

    const products = offerList.map(product => (
        <div className='single-offer-wrapper' key={product.type}>
            <div className='offer-info'>
                <h2>{product.type}</h2>
                <p>{product.slogan}</p>
                <div>
                    <Button btnType='offer-info-button'>
                        <Link to={`${props.match.path}/${product.type}`}>{product.type}</Link>
                    </Button>
                </div>
            </div>
            <img src={product.src} alt={product.type} />
        </div >
    ));

    return (
        <div className='offer-list'>
            <NavWrapper />
            <div className='offer-wrapper'>
                <h1>Jaka kategoria kursów cię interesuje</h1>
                {products}
            </div>
        </div>
    );
};

export default Offer;