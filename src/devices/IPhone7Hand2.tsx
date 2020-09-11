import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'color'>, 'orientation'>;

export default class IPhone7Hand2 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPhone7Hand_2' orientation='portrait' color='black'/>
        )
    }
}
