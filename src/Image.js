import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div className="content content__images">
                <div className="content__images-dt">
                    <img
                    src='images/illustration-box-desktop.svg'
                    className='imageSm'
                    alt='FAQ' />
                    <img
                    src='images/illustration-woman-online-desktop.svg'
                    className='imageLrg'
                    alt='FAQ' />
                </div>
                <div className="content__images-mob">
                    <img
                    src='images/illustration-woman-online-mobile.svg'
                    className='imageLrg'
                    alt='FAQ' />
                </div>
            </div>
        )
    }
}

export default Image