import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import "./style.scss";

export default class Portfolio extends React.Component<any, any> {
    public render() {
        return (
            <div id="my_portfolio">
                <div className="container">
                    <div id="portfolio_content">
                        <div className="portfolio_text">
                            <h1>Портфолио</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
