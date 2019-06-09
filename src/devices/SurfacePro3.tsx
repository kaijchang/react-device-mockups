import * as React from 'react';

import Device from '../Device';

export type Props = {
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class SurfacePro3 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='SurfacePro3' orientation='landscape' color='black'/>
        )
    }
}
