import React from 'react';
import Button from '../../UI/Buttons/Button';
import './SingleCourseItem.css';

const SingleCourseItem = (props) => {

    const advantages = Object.values(props.courseAdvantages)
        .map(adv =>
            <div key={adv} className='advantages-wrapper'>
                <i className="fas fa-check-double"></i><span>{adv}</span>
            </div>
        );


    return (
        <>
            <section className='single-section'>
                <div className='section-description-wrapper'>
                    <h2>{props.sectionName}</h2>
                    <p>{props.courseDescription}</p>
                    {advantages}
                    <p>{props.courseTarget}</p>
                    <div className='course-terms-wrapper'>
                        <i className="fas fa-thumbs-up"><span>{props.courseTerms}</span></i>
                        <span>{`Cena całego kursu: ${props.price}`}</span>
                    </div>
                    <Button click={() => props.addToBasket(props.course)} btnType='Shake'>dodaj do koszyka</Button>
                </div>
                <div className='section-img-wrapper'>
                    <img src={props.src} alt={props.alt} />
                </div>
            </section>
        </>
    );
};

export default SingleCourseItem;