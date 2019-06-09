import * as React from 'react';

import Device from '../Device';

export type Props = {
    color: 'black' | 'white' | 'gold',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class Macbook2015 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='Macbook2015' orientation='portrait'/>
        )
    }
}
