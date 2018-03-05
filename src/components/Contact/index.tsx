import * as React from "react";
import * as ReactDOM from "react-dom";

import { RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";

import Button from "../Button";

import "./style.scss";

export default class Contact extends React.Component<any, any> {
    public render() {
        return (
            <div id="contact_me">
                <div className="container">
                    <div id="contact_content">
                        <div className="contact_blocks">
                            <div className="contact_text">
                                <h1>Напишите мне</h1>
                                <p>Если Вам понравилась моя кандидатура, я буду очень рад с Вами пообщаться и рассмотреть все Ваши предложения. Спасибо за уделенное мне внимание. Для того, чтобы связаться со мной Вы можете написать мне письмо, в самое ближайшее время я Вам обязательно отвечу!</p>
                                <Button className="btn btn-modal success" type="submit">Отправить письмо</Button>
                            </div>
                            <MuiThemeProvider>
                                <div className="contact_form">
                                    <div className="contact-inputs">
                                        <TextField
                                            className="firstname"
                                            floatingLabelText="Поле для ввода имени..."
                                            type="text"
                                        />

                                        <TextField
                                            className="email"
                                            floatingLabelText="Поле для ввода email..."
                                            type="email"
                                        />
                                    </div>
                                    <TextField
                                        className="message"
                                        floatingLabelText="Поле для ввода сообщения..."
                                        multiLine={true}
                                        rows={8}
                                        fullWidth={true}
                                    />
                                </div>
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
