import * as React from "react";
import { Image, MenuItem, Nav, Navbar, NavItem } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import * as back from "../../images/backend.png";
import * as apple from "../../images/responsive.svg";

/* Иконки для skills_blocks */
import * as chrome from "../../images/browsers/chrome.svg";
import * as firefox from "../../images/browsers/firefox.svg";
import * as ie from "../../images/browsers/ie.svg";
import * as opera from "../../images/browsers/opera.svg";
import * as safari from "../../images/browsers/safari.svg";

/* Иконки для блока skill_icons */
import * as css3 from "../../images/technology/css.svg";
import * as docker from "../../images/technology/docker.svg";
import * as github from "../../images/technology/github.svg";
import * as html5 from "../../images/technology/html.svg";
import * as jquery from "../../images/technology/jquery.svg";
import * as js from "../../images/technology/js.svg";
import * as mongo from "../../images/technology/mongo.png";
import * as node from "../../images/technology/node.svg";
import * as php from "../../images/technology/php.svg";
import * as react from "../../images/technology/react.svg";
import * as sass from "../../images/technology/sass.svg";
import * as sketch from "../../images/technology/sketch.svg";
import * as sublime from "../../images/technology/sublime.svg";
import * as typeorm from "../../images/technology/typeorm.png";
import * as typescript from "../../images/technology/typescript.png";
import * as vs from "../../images/technology/vs.svg";
import * as zeplin from "../../images/technology/zeplin.svg";

import "./style.scss";

export default class Skills extends React.Component<any, any> {
    public render() {
        return (
            <div id="my_skills">
                <div className="container">
                    <div id="skills_content">
                        <div className="skills_text">
                            <h1>Навыки.</h1>
                            <p>Я не хочу ограничивать себя тем, что уже знаю, поэтому в свободное время я совершенствую свои навыки и умения,{"\n"}чтобы стать ещё более компетентным в выбранной сфере деятельности.</p>
                        </div>
                        <div className="skills_blocks">
                            <div>
                                <span className="image_block">
                                    <Image src={apple} responsive />
                                </span>
                                <span className="text_block">
                                    <h2>Вёрстка</h2>
                                    <p>Адаптивная вёрстка, div-вёрстка, резиновая вёрстка, фиксированная вёрстка, flex-вёрстка, семантическая вёрстка.</p>
                                </span>
                            </div>
                            <div>
                                <span className="image_block">
                                    <Image src={chrome} responsive />
                                    <Image src={firefox} responsive />
                                    <Image src={safari} responsive />
                                    <Image src={opera} responsive />
                                    <Image src={ie} responsive />
                                </span>
                                <span className="text_block">
                                    <h2>Кроссбраузерность</h2>
                                    <p>Поддержка IE10+, Edge, а так же современных версий Chrome, Mozilla FireFox, Opera, Safari.</p>
                                </span>
                            </div>
                            <div>
                                <span className="image_block">
                                    <Image src={back} responsive />
                                </span>
                                <span className="text_block">
                                    <h2>Backend</h2>
                                    <p>У меня есть опыт написания backend. Для реализации проектов я работаю с такими техонологиями, как: библиотека Express, TypeORM, MongoDB, PHP.</p>
                                </span>
                            </div>
                        </div>
                        <div className="skills_icons">
                            <h2>В своих работах я пользуюсь следующими инструментами и технологиями:</h2>
                            <div>
                                <span>
                                    <Image src={html5} responsive />
                                    <Image src={css3} responsive />
                                    <Image src={js} responsive />
                                    <Image src={react} responsive />
                                    <Image src={node} responsive />
                                    <Image src={vs} responsive />
                                    <Image src={github} responsive />
                                    <Image src={sass} responsive />
                                </span>
                                <span>
                                    <Image src={typeorm} responsive />
                                    <Image src={sublime} responsive />
                                    <Image src={php} responsive />
                                    <Image src={sketch} responsive />
                                    <Image src={zeplin} responsive />
                                    <Image src={mongo} responsive />
                                    <Image src={typescript} responsive />
                                    <Image src={docker} responsive />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
