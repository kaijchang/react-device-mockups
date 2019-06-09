import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait',
    color: 'black' | 'white',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class Pixel extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='Pixel'/>
        )
    }
}
