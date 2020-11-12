import * as React from 'react';

export type Props = {
    device: string,
    orientation?: 'portrait' | 'landscape',
    color?: 'black' | 'white' | 'gold' | 'red' | 'pink',
    width?: number | string,
    height?: number | string,
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

        this.loadPaddingFromStylesheet = this.loadPaddingFromStylesheet.bind(this);
    }

    loadPaddingFromStylesheet(): void {
        const { device, orientation, color } = this.props;

        let found = false;

        for (let i = 0; i < document.styleSheets.length; i++) {
            try {
                const sheet = document.styleSheets[i] as CSSStyleSheet;
                const rules = sheet.cssRules || sheet.rules;
                for (let i = 0; i < rules.length; i++) {
                    const rule = rules[i] as CSSStyleRule;
                    if (rule.selectorText === `.device[data-device="${ device }"][data-orientation="${ orientation }"][data-color="${ color }"]`) {
                        found = true;
                        const paddingRule = rule.style.paddingBottom as string;
                        this.setState({
                           wrapperBottomPadding: parseFloat(paddingRule.substr(0, paddingRule.length - 1))
                        });
                    }
                }
            } catch (e) { }
        }

        if (!found) {
            throw new Error('Unable to find the html5-device-mockups stylsheet.');
        }
    }

    componentDidMount(): void {
        if (document.readyState == 'complete') {
            this.loadPaddingFromStylesheet();
        } else {
            window.addEventListener('load', this.loadPaddingFromStylesheet);
        }
    }

    render() {
        const { device, orientation, color, width, height, wrapperProps, buttonProps, screenProps, children } = this.props;

        let calculatedWidth;

        if (width) {
            calculatedWidth = width;
        } else if (height) {
            calculatedWidth = `calc(${typeof height == 'string' ? height : height + 'px'} / ${this.state.wrapperBottomPadding} * 100)`;
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
