import React from 'react';

const SingleCourseItem = (props) => {

    return (
        <>
            <h2>{props.sectionName}</h2>
            <article>{props.courseDescription}</article>
            <span>{`${props.price} PLN`}</span>
            <button onClick={() => props.addToBasket(props.id)}>dodaj do koszyka</button>

        </>
    );
}

export default SingleCourseItem;