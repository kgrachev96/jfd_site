import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import About from "../About";
import Contact from "../Contact";
import Education from "../Education";
import Exp from "../Exp";
import Menu from "../Menu";
import Portfolio from "../Portfolio";
import ScrollButton from "../ScrollButton";
import Skills from "../Skills";

import "./main.scss";

export default class App extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <main>
                    <Menu />
                    <About />
                    <Skills />
                    <Education />
                    <Exp />
                    <Portfolio />
                    <Contact />
                </main>
                <footer>
                    <span>{}</span>
                    <p>Copyright 2018 Кирилл.</p>
                    <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
                </footer>
            </div>
        );
    }
}
