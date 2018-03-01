import * as React from "react";
import { Image, Navbar } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import * as mobile_logo from "../../images/logo.svg";
import * as desktop_logo from "../../images/logo_desk.svg";

import NavItems from "../NavItems";

import "./style.scss";

export default class Menu extends React.Component<any, any> {
    public render() {
        return (
            <section id="menu_bar">
                <Navbar fixedTop={true} inverse collapseOnSelect>
                    <div className="navbar_blocks">
                        <Navbar.Header>

                            <Navbar.Brand>
                                <a href="#">k.grachev</a>
                            </Navbar.Brand>

                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <NavItems />
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </section >
        );
    }
}
