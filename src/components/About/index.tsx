import axios from "axios";
import * as React from "react";
import { Button, Image } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import * as photo from "../../images/photo@2x.jpg";

import "./style.scss";

export default class About extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
        };
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
                                <span><p>Телефон:</p><p>89258499071</p></span>
                                <span><p>Email:</p><p>kgrachev96@gmail.com</p></span>
                                <span><p>Адрес:</p><p>Мос. обл., г. Лыткарино (ближ. ст. метро - Котельники)</p></span>
                                <span><p>Медиа:</p><p></p></span>
                            </div>
                            <div>
                                <Button bsStyle="primary">Обратная связь</Button>
                                <Button
                                    bsStyle="info"
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
