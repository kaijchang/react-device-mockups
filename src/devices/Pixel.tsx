import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<DeviceProps, 'orientation'> & {
    color?: 'black' | 'white'
};

export default class Pixel extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='Pixel' orientation='portrait'/>
        )
    }
}
