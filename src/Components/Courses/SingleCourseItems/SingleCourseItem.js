import React from 'react';
import Button from '../../UI/Buttons/Button';

const SingleCourseItem = (props) => {

    return (
        <>
            <section className={`${props.sectionName} single-section`}>
                <div className='section-description-wrapper'>
                    <h2>{props.sectionName}</h2>
                    <article>{props.courseDescription}</article>
                    <p>{props.courseTarget}</p>
                    <span>{props.courseTerms}</span>
                    <span>{`Cena całego kursu: ${props.price} PLN`}</span>
                    <Button click={() => props.addToBasket(props.course)} btnType='Shake'>dodaj do koszyka</Button>
                </div>
                <div className='section-img-wrapper'>
                    <img src={props.src} alt={props.alt} />
                </div>
            </section>
        </>
    );
}

export default SingleCourseItem;