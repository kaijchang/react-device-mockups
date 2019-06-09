import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    color: 'black' | 'white' | 'gold',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class iPadPro extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPadPro'/>
        )
    }
}
