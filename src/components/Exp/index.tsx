import * as React from "react";
import { Image } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import * as driveback from "../../images/driveback@2x.png";
import * as fa from "../../images/fa@2x.png";
import * as rodnik from "../../images/rodnik@2x.png";

import "./style.scss";

export default class Exp extends React.Component<any, any> {
    public render() {
        return (
            <div id="my_exp">
                <div className="container">
                    <div id="exp_content">
                        <div className="exp_text">
                            <h1>Опыт</h1>
                            <p>Текст</p>
                        </div>
                        <div className="exp_blocks">
                            <div className="exp_block">
                                <div className="block_image">
                                    <Image src={driveback} responsive />
                                </div>
                                <div className="block_content">
                                    <h2>Driveback</h2>
                                    <p className="exp_date">Август, 2017 г. - по н. вр.</p>
                                    <span><p className="content_name">Должность:</p><p>"Junior Front-end developer"</p></span>
                                    <span><p className="content_name">Обязанности:</p><p>Вёрстка и поддержка сайтов компании. Разработка рекламных кампаний для крупных интернет-магазинов, используя платформу персонализации Driveback. Проведение А/Б тестирования реакламных кампаний.</p></span>
                                </div>
                            </div>
                            <div className="exp_block">
                                <div className="block_image">
                                    <Image src={rodnik} responsive />
                                </div>
                                <div className="block_content">
                                    <h2>РОДНИК-4</h2>
                                    <p className="exp_date">Июль, 2014 г. - Сентябрь, 2014 г.</p>
                                    <span><p className="content_name">Должность:</p><p>"Младший программист | HTML-верстальщик"</p></span>
                                    <span><p className="content_name">Обязанности:</p><p>
                                        Поддержка сайта компании;
                                        Участие в разработке программного продукта для энергосберегающих блоков; Загрузка программы на печатные платы и дальнейшая настройка блоков;
                                    Участие в разработке сайта для дочерней компании "РОДНИК-ЭЛЕКТРО".</p></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
