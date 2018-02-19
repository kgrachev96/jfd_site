import { RaisedButton, TextField } from "material-ui";
import * as React from "react";
import * as ReactDOM from "react-dom";

import Button from "../Button";

import "./style.scss";

export default class FormInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    public render() {
        const { classes } = this.props;
        return (
            <div id="contact-form">
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

        );
    }
}
