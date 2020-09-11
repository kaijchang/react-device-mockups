import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'color'>, 'orientation'>;

export default class SurfaceStudio extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='SurfaceStudio' orientation='portrait' color='black'/>
        )
    }
}
