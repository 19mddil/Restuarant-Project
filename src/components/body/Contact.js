/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { Button, FormGroup, Label, Col } from 'reactstrap'
import { Form, Control, Errors, actions } from 'react-redux-form'
import { connect } from 'react-redux'
import { isAgree } from "../../redux/actionCreators";

const connector = connect(
    state => {
        console.log("map state to props", state);
        return {
            agree: state.agree,
        }
    },
    dispatch => {
        return {
            resetFeedBackForm: () => {
                console.log("here");
                dispatch(actions.reset('feedback'));
            },
            isAgree: agree => dispatch(isAgree(agree))
        }
    })

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /.+@.+\.[A-Za-z]+$/.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agree: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange = event => {
        const value = event.target.checked;
        // if(value === true && )
        const name = event.target.name;
        this.setState(
            {
                [name]: value,
            }
        );
    }

    handleSubmit = values => {
        console.log(values);
        console.log("here");
        this.props.resetFeedBackForm();
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        document.title = 'Contact';
        return (
            <div className="container">
                <div className="row row-content" style={{ padding: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send Us your feedback.</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    < Control.text
                                        model=".firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" md={2}>Conct. Phone</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phone"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required,",
                                                isNumber: "Invalid Number"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                                validEmail: "Invalid Email",
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }} >
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                                onChange={this.handleInputChange}
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                        disabled={!this.props.isAgree(this.props.Agree)}
                                        defaultValue=""
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div >
        )
    }
}

export default connector(Contact);