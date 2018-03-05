import * as React from "react";
import { Image } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import "./style.scss";

import * as db from "../../images/1@2x.png";
import * as dben from "../../images/2@2x.png";
import * as ddm from "../../images/3@2x.png";
import * as ddmen from "../../images/4@2x.png";

export default class Portfolio extends React.Component<any, any> {
    public render() {
        return (
            <div id="my_portfolio">
                <div className="container">
                    <div id="portfolio_content">
                        <div className="portfolio_text">
                            <h1>Портфолио</h1>
                        </div>
                        <div className="portfolio_blocks">
                            <div>
                                <Image src={db} responsive />
                            </div>
                            <div>
                                <Image src={dben} responsive />
                            </div>
                            <div>
                                <Image src={ddm} responsive />
                            </div>
                            <div>
                                <Image src={ddmen} responsive />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
