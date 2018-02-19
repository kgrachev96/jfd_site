import * as React from "react";
import { Image, MenuItem, Nav, Navbar, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import "./style.scss";

export default class NavItems extends React.Component<any, any> {
    public render() {
        return (
            <ul className="nav_bar">
                <li><a href="" role="button">Обо мне</a></li>
                <li><a href="" role="button">Навыки</a></li>
                <li><a href="" role="button">Образование</a></li>
                <li><a href="" role="button">Опыт</a></li>
                <li><a href="" role="button">Портфолио</a></li>
                <li><a href="" role="button">Обратная связь</a></li>
            </ul>
        );
    }
}
