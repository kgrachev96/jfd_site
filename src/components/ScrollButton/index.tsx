import * as React from "react";
import { Image } from "react-bootstrap";

import "./style.scss";

import * as arrow from "../../images/arrowup.svg";

export default class ScrollButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            intervalId: 0,
        };

        this.scrollStep = this.scrollStep.bind(this);
    }

    public scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    public scrollToTop() {
        const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
        this.setState({ intervalId });
    }

    public render() {
        return (
            <button
                className="scrollTop"
                onClick={() => this.scrollToTop()}
            >
                <Image src={arrow} responsive />
            </button>
        );
    }
}
