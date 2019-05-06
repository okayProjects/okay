import React from 'react';
import './SingleOffer.css';
import ge1 from '../../../../images/GESlides/pic1.jpg';
import ge2 from '../../../../images/GESlides/pic2.jpg';
import ge3 from '../../../../images/GESlides/pic3.jpg';
import b2b1 from '../../../../images/Business/img1.jpg';
import b2b2 from '../../../../images/Business/img2.jpg';
import b2b3 from '../../../../images/Business/img3.jpg';
import video from '../../../../images/video/pencils.mov'


const generalEnglish = [
    {
        src: ge1,
        heading: 'GE1'
    },
    {
        src: ge2,
        heading: 'GE2'
    },
    {
        src: ge3,
        heading: 'GE3'
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
    let h1 = null;
    let main = null;

    switch (props.id) {
        case 'angielski ogólny':
            header = <>
                <div className='video-wrapper'>
                    <video className="header-video" src={video} autoPlay loop muted></video>
                </div>
            </>
            break;

        case 'angielski dla firm':
            header = generalEnglish.map((item, index) =>
                <img src={item.src} alt={`img + ${index}`} />);
            h1 = generalEnglish.map(item => <h1>{item.heading}</h1>);
            break;

        case 'angielski za granicą':
            header = business.map((item, index) =>
                <img src={item.src} alt={`img + ${index}`} />);
            h1 = business.map(item => <h1>{item.heading}</h1>);
            break
        default: header = null;
    }

    return (
        (
            <>
                <header className='single-offer-header'>
                    {header}
                    {h1}
                </header>
                {main}
            </>
        ))
}

export default SingleOffer;