// import axios from "axios";
import * as React from "react";
import { Image } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import * as facebook from "../../images/icons/facebook.svg";
import * as github from "../../images/icons/github.svg";
import * as instagram from "../../images/icons/instagram.svg";
import * as telegram from "../../images/icons/telegram.svg";
import * as twitter from "../../images/icons/twitter.svg";
import * as photo from "../../images/photo@2x.jpg";

import Button from "../Button";
import FormDialog from "../FormDialog";

import "./style.scss";

export default class About extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
            showForm: false,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    public handleClick() {
        this.setState({ isLoading: true });

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // axios.get("http://localhost/gkg.pdf")
            //     .then((res: any) => {
            //         const file = res.data;
            //         window.open(file);
            //     });
            // Completed of async action, set loading state back
            this.setState({ isLoading: false });
        }, 2000);
    }

    public handleClose() {
        this.setState({ showForm: false });
    }

    public handleShow() {
        this.setState({ showForm: true });
    }

    public render() {
        const { isLoading } = this.state;
        return (
            <div id="about_me">
                <div className="container">
                    <div id="about_content">
                        <div className="about_text">
                            <h1>Привет, меня зовут Грачёв Кирилл.</h1>
                            <p>В настоящее время я работаю на позиции <b>Junior Front-end Developer</b> и занимаюсь разработкой рекламных кампаний для крупных интернет-магазинов, таких как: <b>Re-store, Samsung, Quelle, Lego, Кораблик, Nespresso, Hoff и другие</b>. Я очень ответственно отношусь к выполнению своей работы, люблю изучать новые технологии и стараться применять их в личных или рабочих проектах.  </p>
                            <div className="about_contacts">
                                <div><p className="contact">Телефон:</p><p>8-(925)-849-90-71</p></div>
                                <div><p className="contact">Email:</p><p>kgrachev96@gmail.com</p></div>
                                <div><p className="contact">Адрес:</p><p>Мос. обл., г. Лыткарино (ближ. ст. метро - <a className="about_metro">Котельники</a>)</p></div>
                                <div><p className="contact">Медиа:</p>
                                    <p className="contact_icons">
                                        <a href="https://t.me/kgrachev" target="_blank"><Image src={telegram} /></a>
                                        <a href="https://www.facebook.com/profile.php?id=100015611386835" target="_blank"><Image src={facebook} /></a>
                                        <a href="https://twitter.com/kgra4ev" target="_blank"><Image src={twitter} /></a>
                                        <a href="https://github.com/kgrachev96" target="_blank"><Image src={github} /></a>
                                        <a href="https://www.instagram.com/k_gra4ev/" target="_blank"><Image src={instagram} /></a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    className="btn primary"
                                    onClick={this.handleShow}
                                >
                                    Обратная связь
                                </Button>
                                <FormDialog show={this.state.showForm} hide={this.handleClose} />
                                <Button
                                    className="btn info"
                                    disabled={isLoading}
                                    onClick={!isLoading ? this.handleClick : null}
                                >
                                    {isLoading ? "Загрузка..." : "Скачать резюме"}
                                </Button>
                            </div>
                        </div>
                        <Image src={photo} responsive />
                    </div>
                </div>
            </div >
        );
    }
}
