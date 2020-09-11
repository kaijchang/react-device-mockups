import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'device'>, 'orientation'> & {
    color?: 'black' | 'white'
};

export default class GalaxyTab4 extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='galaxyTab4' orientation='portrait'/>
        )
    }
}
