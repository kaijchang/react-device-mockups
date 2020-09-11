import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'device'>, 'orientation'> & {
    color?: 'black' | 'white'
};

export default class Pixel extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='Pixel' orientation='portrait'/>
        )
    }
}
