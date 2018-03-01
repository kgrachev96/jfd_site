// import axios from "axios";
import * as React from "react";
import { Image } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import * as facebook from "../../images/icons/facebook.svg";
import * as github from "../../images/icons/github.svg";
import * as instagram from "../../images/icons/instagram.svg";
import * as telegram from "../../images/icons/telegram.svg";
import * as twitter from "../../images/icons/twitter.svg";
import * as photo from "../../images/photo.jpg";

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
            <section id="about_me">
                <div className="container">
                    <div id="about_content">
                        <div className="about_text">
                            <h1>Здравствуйте, меня зовут Грачёв Кирилл.</h1>
                            <p>В настоящее время я работаю на позиции <b>Junior Front-end Developer</b> и занимаюсь разработкой рекламных кампаний для крупных интернет-магазинов, таких как: <b>Re-store, Samsung, Quelle, Lego, Кораблик, Hoff, Nespresso и другие</b>. Я очень ответственно отношусь к выполнению своей работы. Для меня важен сам процесс, продумывание деталей и корректировка сделанной работы, которую я люблю доводить до идеала. Результат так же имеет для меня не малое значение, однако я считаю, что работа должна быть выполнена не в количественном объёме, а в качественном совершенстве.</p>
                            <p>Я ставлю себе цель - стать востребованным специалистом, поэтому считаю что моя кандидатура может Вас заинтересовать.</p>
                            <div className="about_contacts">
                                <div><p><b>Телефон:</b>8-(925)-849-90-71</p></div>
                                <div><p><b>Email:</b>kgrachev96@gmail.com</p></div>
                                <div><p><b>Адрес:</b>Мос. обл., г. Лыткарино (ближ. ст. метро - <a className="about_metro">Котельники</a>)</p></div>
                                <div>
                                    <p className="contact_icons">
                                        <b>Медиа:</b>
                                        <a className="telegram" href="https://t.me/kgrachev" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className="fill_tel" fill="#000000" d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" /></svg> </a>
                                        <a href="https://www.facebook.com/profile.php?id=100015611386835" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className="fill_fb" fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" /></svg> </a>
                                        <a href="https://twitter.com/kgra4ev" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className="fill_twitt" fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" /></svg> </a>
                                        <a href="https://github.com/kgrachev96" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className="fill_git" fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg> </a>
                                        <a href="https://www.instagram.com/k_gra4ev/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className="fill_inst" fill="#000000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg> </a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact_btns">
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
                        <div className="about_image">
                            <Image src={photo} responsive />
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}
