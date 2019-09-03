import React from 'react';
import './SingleOffer.css';
import GeneralEnglishCourses from '../../../Courses/GECourses/GeneralEnglishCourses';
import BusinessCourses from '../../../Courses/BusinessCourses/BusinessCourses';
import AbroadCourses from '../../../Courses/AbroadCourses/AbroadCourses';
import abr1 from '../../../../images/Abroad/abr1.jpg';
import abr2 from '../../../../images/Abroad/abr2.jpg';
import abr3 from '../../../../images/Abroad/abr3.jpg';
import b2b1 from '../../../../images/Business/b2b1.jpg';
import b2b2 from '../../../../images/Business/b2b2.jpg';
import b2b3 from '../../../../images/Business/b2b3.jpg';
import video from '../../../../images/video/pencils.mp4';


const abroad = [
    {
        src: abr1,
        // heading: 'abroad1'
    },
    {
        src: abr2,
        // heading: 'abroad2'
    },
    {
        src: abr3,
        // heading: 'abroad3'
    },
]
const business = [
    {
        src: b2b1,
        // heading: 'b2b1'
    },
    {
        src: b2b2,
        // heading: 'b2b2'
    },
    {
        src: b2b3,
        // heading: 'b2b3'
    },
]

const SingleOffer = (props) => {

    let header = null;
    let main = null;

    switch (props.id) {
        case 'angielski dla każdego':
            header =
                <div className='video-wrapper'>
                    <video className="header-video" src={video} autoPlay loop muted></video>
                </div>
            main = <GeneralEnglishCourses />
            break;

        case 'angielski dla firm':
            const slidesBusiness = business.map((item, index) =>
                <React.Fragment key={item.src}>
                    <img src={item.src} alt={`img + ${index}`} />
                </React.Fragment>
            );
            // const h1Business = business.map(item =>
            //     <React.Fragment key={item.heading}>
            //         <h1>{item.heading}</h1>
            //     </React.Fragment>);

            header = <div className='carousel-wrapper'>{slidesBusiness}</div>;
            main = <BusinessCourses />
            break;

        case 'angielski za granicą':
            const slidesAbroad = abroad.map((item, index) =>
                <React.Fragment key={item.src}>
                    <img src={item.src} alt={`img + ${index}`} />
                </React.Fragment>
            );
            // const h1Abroad = abroad.map(item =>
            //     <React.Fragment key={item.heading}>
            //         <h1>{item.heading}</h1>
            //     </React.Fragment>);
            header = <div className='carousel-wrapper'>{slidesAbroad}</div>;
            main = <AbroadCourses />
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