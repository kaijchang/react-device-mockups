import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<DeviceProps, 'device'> & {
    orientation?: 'portrait' | 'landscape',
    color?: 'black' | 'white' | 'gold' | 'pink' | 'red'
};

export default class IPhone7 extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' color='black' { ...this.props } device='iPhone7'/>
        )
    }
}
