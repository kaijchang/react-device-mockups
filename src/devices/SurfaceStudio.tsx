import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait',
    color: 'black',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class SurfaceStudio extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='SurfaceStudio'/>
        )
    }
}
