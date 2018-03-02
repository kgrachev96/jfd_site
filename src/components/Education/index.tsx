import * as React from "react";
import { Image } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import * as fa from "../../images/fa@2x.png";

import "./style.scss";

export default class Education extends React.Component<any, any> {
    public render() {
        return (
            <div id="my_education">
                <div className="container">
                    <div id="edu_content">
                        <div className="edu_text">
                            <h1>Образование</h1>
                            <p>Мне нравится изучать новые технологии и я стараюсь применять их как в личных, так и в рабочих проектах. <br />Это помогает мне оттачивать свое мастерство и добиваться хороших успехов в моём деле.</p>
                        </div>
                        <div className="edu_block">
                            <div className="block_image">
                                <Image src={fa} responsive />
                            </div>
                            <div className="block_content">
                                <h2>Финансовый Университет при Правительстве РФ</h2>
                                <p className="edu_date">Сентябрь, 2013 г. - Август, 2017 г.</p>
                                <span><p className="content_name">Факультет:</p><p>"Прикладной математики и информационных технологий"</p></span>
                                <span><p className="content_name">Направление:</p><p>"Прикладная информатика"</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
