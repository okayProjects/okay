import React from 'react';
import './SingleOffer.css';
import GeneralEnglishCourses from '../../../Courses/GECourses/GeneralEnglishCourses';
import ge1 from '../../../../images/GESlides/pic1.jpg';
import ge2 from '../../../../images/GESlides/pic2.jpg';
import ge3 from '../../../../images/GESlides/pic3.jpg';
import b2b1 from '../../../../images/Business/img1.jpg';
import b2b2 from '../../../../images/Business/img2.jpg';
import b2b3 from '../../../../images/Business/img3.jpg';
import video from '../../../../images/video/pencils.mov'


const abroad = [
    {
        src: ge1,
        heading: 'abroad1'
    },
    {
        src: ge2,
        heading: 'abroad2'
    },
    {
        src: ge3,
        heading: 'abroad3'
    },
]
const business = [
    {
        src: b2b1,
        heading: 'b2b1'
    },
    {
        src: b2b2,
        heading: 'b2b2'
    },
    {
        src: b2b3,
        heading: 'b2b3'
    },
]

const SingleOffer = (props) => {

    let header = null;
    let main = null;

    switch (props.id) {
        case 'angielski ogólny':
            header =
                <div className='video-wrapper'>
                    <video className="header-video" src={video} autoPlay loop muted></video>
                </div>
            main = <GeneralEnglishCourses />
            break;

        case 'angielski dla firm':
            const slidesBusiness = business.map((item, index) =>
                <React.Fragment key={item.heading}>
                    <img src={item.src} alt={`img + ${index}`} />
                </React.Fragment>
            );
            const h1Business = business.map(item =>
                <React.Fragment key={item.heading}>
                    <h1>{item.heading}</h1>
                </React.Fragment>);

            header = <div className='carousel-wrapper'>{slidesBusiness}{h1Business}</div>
            break;

        case 'angielski za granicą':
            const slidesAbroad = abroad.map((item, index) =>
                <React.Fragment key={item.heading}>
                    <img src={item.src} alt={`img + ${index}`} />
                </React.Fragment>
            );
            const h1Abroad = abroad.map(item =>
                <React.Fragment key={item.heading}>
                    <h1>{item.heading}</h1>
                </React.Fragment>);
            header = <div className='carousel-wrapper'>{slidesAbroad}{h1Abroad}</div>
            break
        default: header = null;
    }

    return (
        <>
            <header className='single-offer-header'>
                {header}
            </header>
            <main>
                {main}
            </main>
        </>
    )
}

export default SingleOffer;