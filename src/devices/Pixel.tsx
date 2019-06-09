import * as React from 'react';

import Device from '../Device';

export type Props = {
    color: 'black' | 'white',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class Pixel extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='Pixel' orientation='portrait'/>
        )
    }
}
