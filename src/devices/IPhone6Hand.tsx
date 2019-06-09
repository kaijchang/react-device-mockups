import * as React from 'react';

import Device from '../Device';

export type Props = {
    color: 'black' | 'white',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class IPhone6Hand extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPhone6Hand' orientation='portrait'/>
        )
    }
}
