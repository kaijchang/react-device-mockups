import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    color: 'black' | 'white' | 'gold' | 'pink' | 'red',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class IPhone7 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPhone7'/>
        )
    }
}