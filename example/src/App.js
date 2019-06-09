import React, { Component } from 'react';

import 'html5-device-mockups/dist/device-mockups.min.css';

import Device from 'react-device-mockups';

export default class App extends Component {
    render () {
        return (
            <Device device='iPhone7' orientation='portrait' color='black'>
                Hello World!
            </Device>
        );
    }
}
