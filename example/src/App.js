import React, { Component } from 'react';

import 'html5-device-mockups/dist/device-mockups.min.css';

import { MacbookPro } from 'react-device-mockups';

export default class App extends Component {
    render () {
        return (
            <MacbookPro height={ 500 }>
                Hello World!
            </MacbookPro>
        );
    }
}
