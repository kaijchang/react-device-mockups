import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<Omit<DeviceProps, 'device'>, 'color'>, 'orientation'>;

export default class IMac extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iMac' orientation='portrait' color='black'/>
        )
    }
}
