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
            <section>
                <main>
                    <Menu />
                    <About />
                    <Skills />
                </main>
                <footer>
                    <p>Copyright 2018 Кирилл.</p>
                </footer>
            </section>
        );
    }
}
