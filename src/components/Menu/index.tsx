import * as React from "react";
import { Image, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import * as logo from "../../images/logo.svg";

import "./style.scss";

export default class Menu extends React.Component<any, any> {
    public render() {
        return (
            <div id="menu_bar">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Image src={logo} responsive />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Обо мне
                        </NavItem>
                            <NavItem eventKey={2} href="#">
                                Навыки
                        </NavItem>
                            <NavItem eventKey={3} href="#">
                                Образование
                        </NavItem>
                            <NavItem eventKey={4} href="#">
                                Опыт
                        </NavItem>
                            <NavItem eventKey={5} href="#">
                                Портфолио
                        </NavItem>
                            <NavItem eventKey={5} href="#">
                                Обратная связь
                        </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}
