import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<DeviceProps, 'device'> & {
    orientation?: 'portrait' | 'landscape',
    color?: 'black' | 'white' | 'gold'
};

export default class IPadAir2 extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' color='black' { ...this.props } device='iPadAir2'/>
        )
    }
}
