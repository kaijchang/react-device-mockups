import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    color: 'black',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class iPhoneX extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPhoneX'/>
        )
    }
}