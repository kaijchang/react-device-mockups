import React, { Component } from 'react';

import 'html5-device-mockups/dist/device-mockups.min.css';

import { IPad } from 'react-device-mockups';

export default class App extends Component {
    render () {
        return (
            <IPad height="10rem" buttonProps={ {
                onClick: () => alert('Home Button Clicked!')
            } }>
                <iframe title='showcase' src='https://example.com' style={ {
                    width: '100%',
                    height: '100%',
                    margin: 0
                } }/>
            </IPad>
        );
    }
}
