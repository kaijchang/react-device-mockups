# react-device-mockups

> 

[![NPM](https://img.shields.io/npm/v/react-device-mockups.svg)](https://www.npmjs.com/package/react-device-mockups) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-device-mockups html5-device-mockups
```

## Usage

```tsx
import React, { Component } from 'react';

import 'html5-device-mockups/dist/device-mockups.min.css';

import { MacbookPro } from 'react-device-mockups';

export default class App extends Component {
    render () {
        return (
            <MacbookPro>
                Hello World!
            </MacbookPro>
        );
    }
}
```

## License

MIT © [kajchang](https://github.com/kajchang)
