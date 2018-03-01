import * as React from "react";
import * as ReactDOM from "react-dom";

import { RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";

import "./style.scss";

export default class Contact extends React.Component<any, any> {
    public render() {
        return (
            <div id="contact_me">
                <div className="container">
                    <div id="contact_content">
                        <div className="contact_text">
                            <h1>Обратная связь</h1>
                        </div>
                        <div>
                            <MuiThemeProvider>
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
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
