import * as React from 'react';

export type Props = {
    device: string,
    orientation: 'portrait' | 'landscape',
    color: 'black' | 'white' | 'gold' | 'red' | 'pink',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class Device extends React.Component<Props> {
    render() {
        const { device, orientation, color, children, buttonProps, screenProps } = this.props;

        return (
            <div className='device-wrapper'>
                <div className='device' data-device={ device } data-orientation={ orientation } data-color={ color }>
                    <div className='screen' { ...screenProps }>
                        { children }
                    </div>
                    <div className='button' { ...buttonProps }/>
                </div>
            </div>
        );
    }
}
