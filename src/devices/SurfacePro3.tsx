import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'landscape',
    color: 'black',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class SurfacePro3 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='SurfacePro3'/>
        )
    }
}
