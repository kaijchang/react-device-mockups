import * as React from 'react';

import Device from '../Device';

export type Props = {
    color: 'black' | 'white' | 'gold',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class Macbook2015 extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='Macbook2015' orientation='portrait'/>
        )
    }
}
