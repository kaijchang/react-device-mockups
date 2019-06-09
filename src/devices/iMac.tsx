import * as React from 'react';

import Device from '../Device';

export type Props = {
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class iMac extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iMac' orientation='portrait' color='black'/>
        )
    }
}
