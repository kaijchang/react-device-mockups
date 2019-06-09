import React, { Component } from 'react';

import 'html5-device-mockups/dist/device-mockups.min.css';

import { MacbookPro } from 'react-device-mockups';

export default class App extends Component {
    render () {
        return (
            <MacbookPro orientation='portrait' color='black'>
                Hello World!
            </MacbookPro>
        );
    }
}
