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
                        hintText="Кирилл"
                        floatingLabelText="Поле для ввода имени..."
                        type="text"
                    />

                    <TextField
                        className="email"
                        hintText="kgrachev96@gmail.com"
                        floatingLabelText="Поле для ввода email..."
                        type="email"
                    />
                </div>
                <TextField
                    className="message"
                    hintText="Message Field"
                    floatingLabelText="MultiLine and FloatingLabel"
                    multiLine={true}
                    rows={2}
                    fullWidth={true}
                />
            </div>

        );
    }
}
