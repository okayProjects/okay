import React from 'react';

const SingleCourseItem = (props) => {

    return (
        <>
            <section className={props.sectionName}>
                <div className='section-description-wrapper'>
                    <h2>{props.sectionName}</h2>
                    <article>{props.courseDescription}</article>
                    <span>{`${props.price} PLN`}</span>
                    <button onClick={() => props.addToBasket(props.id)}>dodaj do koszyka</button>
                </div>
                <div className='section-img-wrapper'>
                    <img src={props.src} alt={props.alt} />
                </div>
            </section>
        </>
    );
}

export default SingleCourseItem;