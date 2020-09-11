import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'color'>, 'orientation'>;

export default class SamsungTV extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='SamsungTV' orientation='portrait' color='black'/>
        )
    }
}
