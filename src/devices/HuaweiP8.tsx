import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    color: 'gold',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class HuaweiP8 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='HuaweiP8'/>
        )
    }
}
