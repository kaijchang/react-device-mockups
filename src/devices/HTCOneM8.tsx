import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'device'>, 'color'> & {
    orientation?: 'portrait' | 'landscape'
};

export default class HTCOneM8 extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' { ...this.props } device='HtcOneM8' color='black'/>
        )
    }
}
