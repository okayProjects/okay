import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {

    render() {
        return (
            <div className='banner-wrapper'>
                <div className='globe-wrapper'>
                    <i className="fas fa-globe-americas"></i>
                    <div className='animation-wrapper'></div>
                </div>
            </div>
        );
    }
}

export default Banner;