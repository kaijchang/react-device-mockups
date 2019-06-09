import * as React from 'react';

import Device from '../Device';

export type Props = {
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class IMac extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iMac' orientation='portrait' color='black'/>
        )
    }
}
