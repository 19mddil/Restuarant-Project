import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            agree: false,
            contactType: 'Phone',
            message: "",
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        Send Us your feedback.
                    </div>
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        value={this.state.lastName}
                                        placeholder="Last Name"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" md={2}>Conct. Phone</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="phone"
                                        value={this.state.phone}
                                        placeholder="Phone Number"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        placeholder="Email"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }} >
                                    <FormGroup>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message" md={2}>Your feedback</Label>
                                <Col md={10}>
                                    <Input type="textArea" name="message" value={this.state.message} rows="12">

                                    </Input>
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
            </div>
        )
    }
}

export default Contact;