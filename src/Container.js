import React, { Component } from 'react';
import Image from './Image'
import Content from './Content'

class Container extends Component {
    render() {
        return (
            <div className="container" style={{backgroundImage:'url(/images/bg-pattern-desktop.svg)'}}>
                <Image />
                <Content />
            </div>
        )
    }
}

export default Container