import React from 'react';
import { Link } from 'react-router-dom';


const offerList = ['one', 'two', 'three'];

const Offer = (props) => {
    const products = offerList.map(product => (
        <li key={product}>
            <Link to={`${props.match.path}/${product}`}>{product}</Link>
        </li>
    ))

    return (
        <div>
            <p>I am OFFER</p>
            <ul>
                {products}
            </ul>
        </div>
    )
}

export default Offer;