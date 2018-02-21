import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import About from "../About";
import Menu from "../Menu";
import Skills from "../Skills";

import "./main.scss";

export default class App extends React.Component<any, any> {
    public render() {
        return (
            <main>
                <Menu />
                <About />
                <Skills />
            </main>
        );
    }
}
