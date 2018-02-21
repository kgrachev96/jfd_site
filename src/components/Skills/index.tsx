import * as React from "react";
import { Image, MenuItem, Nav, Navbar, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import * as apple from "../../images/responsive.svg";

import "./style.scss";

export default class Skills extends React.Component<any, any> {
    public render() {
        return (
            <div id="my_skills">
                <div className="container">
                    <div id="skills_content">
                        <div className="skills_text">
                            <h1>Навыки.</h1>
                            <p>Я не хочу ограничивать себя тем, что уже знаю, поэтому в свободное время я совершенствую свои навыки и умения, чтобы стать ещё более компетентным в выбранной сфере деятельности.</p>
                        </div>
                        <div className="skills_blocks">
                            <div>
                                <Image src={apple} responsive />
                                <p>Адаптивная вёрстка, div-вёрстка, резиновая вёрстка, фиксированная вёрстка, flex-вёрстка, семантическая вёрстка.</p>
                            </div>
                            <div>
                                <Image src={apple} responsive />
                            </div>
                            <div>
                                <Image src={apple} responsive />
                            </div>
                            <div>
                                <Image src={apple} responsive />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
