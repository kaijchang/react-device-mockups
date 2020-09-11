import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'device'>, 'color'> & {
    orientation?: 'portrait' | 'landscape'
};

export default class IPhoneX extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' { ...this.props } device='iPhoneX' color='black'/>
        )
    }
}
