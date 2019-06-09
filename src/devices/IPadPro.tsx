import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    color: 'black' | 'white' | 'gold',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class IPadPro extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' color='black' { ...this.props } device='iPadPro'/>
        )
    }
}
