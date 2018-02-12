import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import Menu from "../Menu";

import "./style.scss";

export default class App extends React.Component<any, any> {
    public render() {
        return (
            <main>
                <Menu />
            </main>
        );
    }
}
