import { RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import * as React from "react";
import { Col, ControlLabel, Form, FormControl, FormGroup, Modal } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import Button from "../Button";

import "./style.scss";

export default class FormDialog extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: "",
            email: "",
            valid: true,
            emailErrorField: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);

    }

    public validateEmail(email: any) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    public handleSubmit(event: any) {
        event.preventDefault();
        const name = this.props.name;
    }

    public nameChange(event: any) {
        const name = event.target.value;
        this.setState({ name });
    }

    public emailChange(event: any) {
        const email = event.target.value;
        const emailValid = this.validateEmail(email);
        this.setState({
            email: event.target.value,
            valid: emailValid,
        });
    }

    public render() {
        let emailErrorField = "";
        const { email, valid } = this.state;

        (!valid) ? emailErrorField += "Введите корректный e-mail" : (email === "" ? emailErrorField = "" : "");

        return (
            <Modal
                show={this.props.show}
                onHide={this.props.hide}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Форма обратной связи</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Моё портфолио Вас заинтересовало? Напишите мне. Я буду очень рад Вашему письму!</h2>
                    <div>
                        <MuiThemeProvider>
                            <div id="contact-form">
                                <div className="contact-inputs">
                                    <TextField
                                        className="firstname"
                                        value={this.state.name}
                                        floatingLabelText="Поле для ввода имени..."
                                        type="text"
                                        onChange={this.nameChange}
                                    />

                                    <TextField
                                        className="email"
                                        errorText={emailErrorField}
                                        value={this.state.email}
                                        floatingLabelText="Поле для ввода email..."
                                        type="email"
                                        onChange={this.emailChange}
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

                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-modal success" onClick={this.props.send} type="submit">Отправить письмо</Button>
                    <Button className="btn btn-modal exit" onClick={this.props.hide}>Закрыть</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}
