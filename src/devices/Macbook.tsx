import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'device'>, 'orientation'> & {
    color?: 'black' | 'white' | 'gold'
};

export default class Macbook extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='Macbook' orientation='portrait'/>
        )
    }
}
