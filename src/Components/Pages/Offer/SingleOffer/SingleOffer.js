import React from 'react';
import { Link } from 'react-router-dom';

const SingleOffer = (props) => {

    return (
        <div>
            <h1>I am single offer number {props.id}</h1>
            <Link to='/offer'>Back</Link>
        </div>
    );
}

export default SingleOffer;