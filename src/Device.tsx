import * as React from 'react';

export type Props = {
    device: string,
    orientation?: 'portrait' | 'landscape',
    color?: 'black' | 'white' | 'gold' | 'red' | 'pink',
    width?: number,
    height?: number,
    wrapperProps?: React.HTMLProps<HTMLDivElement>,
    buttonProps?: React.HTMLProps<HTMLDivElement>,
    screenProps?: React.HTMLProps<HTMLDivElement>
};

export type State = {
    wrapperBottomPadding: number
}

export default class Device extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            wrapperBottomPadding: 1
        };
    }

    componentDidMount(): void {
        const { device, orientation, color } = this.props;

        for (let i = 0; i < document.styleSheets.length; i++) {
            const sheet = document.styleSheets[i] as CSSStyleSheet;
            const rules = sheet.cssRules || sheet.rules;
            for (let i = 0; i < rules.length; i++) {
                const rule = rules[i] as CSSStyleRule;
                if (rule.selectorText === `.device[data-device="${ device }"][data-orientation="${ orientation }"][data-color="${ color }"]`) {
                    const paddingRule = rule.style.paddingBottom as string;
                    this.setState({
                       wrapperBottomPadding: parseFloat(paddingRule.substr(0, paddingRule.length - 1))
                    });
                }
            }
        }
    }

    render() {
        const { device, orientation, color, width, height, wrapperProps, buttonProps, screenProps, children } = this.props;

        let calculatedWidth;

        if (width) {
            calculatedWidth = width;
        } else if (height) {
            calculatedWidth = height / this.state.wrapperBottomPadding * 100;
        }

        return (
            <div
                { ...wrapperProps }
                className='device-wrapper'
                style={ { maxWidth: calculatedWidth, width: calculatedWidth, ...(wrapperProps && wrapperProps.style ? wrapperProps.style : {}) } }
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
