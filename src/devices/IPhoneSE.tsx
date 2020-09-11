import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = DeviceProps & {
    orientation?: 'portrait' | 'landscape',
    color?: 'black' | 'white' | 'gold' | 'pink'
};

export default class IPhoneSE extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' color='black' { ...this.props } device='iPhoneSE'/>
        )
    }
}
