import * as React from 'react';

export type Props = {
    device: string,
    orientation?: 'portrait' | 'landscape',
    color?: 'black' | 'white' | 'gold' | 'red' | 'pink',
    width?: number | string,
    wrapperProps?: React.HTMLProps<HTMLDivElement>,
    buttonProps?: React.HTMLProps<HTMLDivElement>,
    screenProps?: React.HTMLProps<HTMLDivElement>
};

export default class Device extends React.Component<Props> {
    render() {
        const { device, orientation, color, width, wrapperProps, buttonProps, screenProps, children } = this.props;

        return (
            <div
                { ...wrapperProps }
                className='device-wrapper'
                style={ { maxWidth: width, width, ...(wrapperProps && wrapperProps.style ? wrapperProps.style : {}) } }
            >
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
