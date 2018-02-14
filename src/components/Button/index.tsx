import * as React from "react";

import "./style.scss";

export default class Button extends React.Component<any, any> {
    public render() {
        return (
            <button
                className={this.props.className}
                onClick={this.props.onClick}
                {...this.props}
            >
                {this.props.children}
            </button>
        );
    }
}
