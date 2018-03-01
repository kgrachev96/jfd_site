import * as React from "react";
import { Image, MenuItem, Nav, Navbar, NavItem, Tab, Tabs } from "react-bootstrap";
import * as ReactDOM from "react-dom";

// import { Tabs } from "../Tabs";

import * as back from "../../images/back.png";
import * as browsers from "../../images/brows.png";
import * as apple from "../../images/device.png";

/* Иконки для блока skill_icons */
import * as babel from "../../images/technology/babel.svg";
import * as bootstrap from "../../images/technology/bootstrap.svg";
import * as css from "../../images/technology/css.svg";
import * as docker from "../../images/technology/docker.svg";
import * as express from "../../images/technology/express.svg";
import * as git from "../../images/technology/git.svg";
import * as html from "../../images/technology/html.svg";
import * as javascript from "../../images/technology/javascript.svg";
import * as jquery from "../../images/technology/jquery.svg";
import * as mongodb from "../../images/technology/mongodb.svg";
import * as nginx from "../../images/technology/nginx.svg";
import * as nodejs from "../../images/technology/nodejs.svg";
import * as npm from "../../images/technology/npm.svg";
import * as php from "../../images/technology/php.svg";
import * as postman from "../../images/technology/postman.svg";
import * as react from "../../images/technology/react.svg";
import * as sass from "../../images/technology/sass.svg";
import * as sketch from "../../images/technology/sketch.svg";
import * as sublime from "../../images/technology/sublime.svg";
import * as typeorm from "../../images/technology/typeorm.svg";
import * as typescript from "../../images/technology/typescript.svg";
import * as vs from "../../images/technology/vs.svg";
import * as webpack from "../../images/technology/webpack.svg";
import * as zeplin from "../../images/technology/zeplin.svg";

import "./style.scss";

export default class Skills extends React.Component<any, any> {
    public render() {
        return (
            <section id="my_skills">
                <div className="container">
                    <div id="skills_content">
                        <div className="skills_text">
                            <h1>Навыки</h1>
                            <p>Я не хочу ограничивать себя тем, что уже знаю, поэтому в свободное время я совершенствую свои навыки и умения, <br />чтобы стать ещё более компетентным в выбранной сфере деятельности.</p>
                        </div>
                        <div className="skills_blocks">
                            <div className="skill_block">
                                <div className="image_block">
                                    <Image src={apple} responsive />
                                </div>
                                <div className="text_block">
                                    <h2>Вёрстка</h2>
                                    <p>Адаптивная вёрстка, div-вёрстка, резиновая вёрстка, фиксированная вёрстка, flex-вёрстка, семантическая вёрстка.</p>
                                </div>
                            </div>
                            <div className="skill_block">
                                <div className="image_block">
                                    <Image src={back} responsive />
                                </div>
                                <div className="text_block">
                                    <h2>Backend</h2>
                                    <p>Опыт программирования серверной части web-приложений.</p>
                                </div>
                            </div>
                            <div className="skill_block">
                                <div className="image_block">
                                    <Image src={browsers} responsive />
                                </div>
                                <div className="text_block">
                                    <h2>Кроссбраузерность</h2>
                                    <p>Поддержка IE10+, Edge, а так же современных версий Chrome, Mozilla FireFox, Opera, Safari.</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills_grid">
                            <h2>В своих работах я использую следующие инструменты и технологии:</h2>
                            <div className="skills_icons">
                                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                    <Tab eventKey={1} title="Front-end">
                                        <div className="skill_tile html">
                                            <Image src={html} responsive />
                                            <span>HTML</span>
                                        </div>
                                        <div className="skill_tile css">
                                            <Image src={css} responsive />
                                            <span>CSS</span>
                                        </div>
                                        <div className="skill_tile js">
                                            <Image src={javascript} responsive />
                                            <span>JavaScript</span>
                                        </div>
                                        <div className="skill_tile ts">
                                            <Image src={typescript} responsive />
                                            <span>TypeScript</span>
                                        </div>
                                        <div className="skill_tile react">
                                            <Image src={react} responsive />
                                            <span>React</span>
                                        </div>
                                        <div className="skill_tile sass">
                                            <Image src={sass} responsive />
                                            <span>Sass</span>
                                        </div>
                                        <div className="skill_tile bootstrap">
                                            <Image src={bootstrap} responsive />
                                            <span>Bootstrap</span>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="Back-end">
                                        <div className="skill_tile express">
                                            <Image src={express} responsive />
                                            <span>Express</span>
                                        </div>
                                        <div className="skill_tile mongodb">
                                            <Image src={mongodb} responsive />
                                            <span>MongoDB</span>
                                        </div>
                                        <div className="skill_tile node">
                                            <Image src={nodejs} responsive />
                                            <span>Node.js</span>
                                        </div>
                                        <div className="skill_tile php">
                                            <Image src={php} responsive />
                                            <span>Php</span>
                                        </div>
                                        <div className="skill_tile nginx">
                                            <Image src={nginx} responsive />
                                            <span>Nginx</span>
                                        </div>
                                        <div className="skill_tile jquery">
                                            <Image src={jquery} responsive />
                                            <span>Jquery</span>
                                        </div>
                                        <div className="skill_tile typeorm">
                                            <Image src={typeorm} responsive />
                                            <span>Typeorm</span>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={3} title="Инструменты">
                                        <div className="skill_tile babel">
                                            <Image src={babel} responsive />
                                            <span>Babel</span>
                                        </div>
                                        <div className="skill_tile git">
                                            <Image src={git} responsive />
                                            <span>Git</span>
                                        </div>
                                        <div className="skill_tile npm">
                                            <Image src={npm} responsive />
                                            <span>npm</span>
                                        </div>
                                        <div className="skill_tile sublime">
                                            <Image src={sublime} responsive />
                                            <span>Sublime Text</span>
                                        </div>
                                        <div className="skill_tile vs">
                                            <Image src={vs} responsive />
                                            <span>VS Code</span>
                                        </div>
                                        <div className="skill_tile webpack">
                                            <Image src={webpack} responsive />
                                            <span>Webpack</span>
                                        </div>
                                        <div className="skill_tile docker">
                                            <Image src={docker} responsive />
                                            <span>Docker</span>
                                        </div>
                                        <div className="skill_tile sketch">
                                            <Image src={sketch} responsive />
                                            <span>Sketch</span>
                                        </div>
                                        <div className="skill_tile zeplin">
                                            <Image src={zeplin} responsive />
                                            <span>Zeplin</span>
                                        </div>
                                        <div className="skill_tile postman">
                                            <Image src={postman} responsive />
                                            <span>Postman</span>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}
