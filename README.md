# react-device-mockups

> 

[![NPM](https://img.shields.io/npm/v/react-device-mockups.svg)](https://www.npmjs.com/package/react-device-mockups) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-device-mockups html5-device-mockups
```

## Usage

To control the height of the device, see [https://github.com/pixelsign/html5-device-mockups/issues/47](https://github.com/pixelsign/html5-device-mockups/issues/47).

```tsx
import React, { Component } from 'react';

import 'html5-device-mockups/dist/device-mockups.min.css';

import { IPad } from 'react-device-mockups';

export default class App extends Component {
    render () {
        return (
            <IPad width={300} orientation='landscape' color='black' buttonProps={ {
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
```

## License

MIT © [kajchang](https://github.com/kajchang)
