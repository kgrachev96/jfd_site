import { RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import * as React from "react";
import { Col, ControlLabel, Form, FormControl, FormGroup, Modal } from "react-bootstrap";
import * as ReactDOM from "react-dom";

import Button from "../Button";
import FormInput from "../FormInput";

import "./style.scss";

export default class FormDialog extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }
    public render() {
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
                            <FormInput />
                        </MuiThemeProvider>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-modal success" type="submit">Отправить письмо</Button>
                    <Button className="btn btn-modal exit" onClick={this.props.hide}>Закрыть</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}
