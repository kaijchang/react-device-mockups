import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class IPhoneX extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPhoneX' color='black'/>
        )
    }
}
