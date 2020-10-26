import React, { Component } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { handleAddQuestion } from "../actions/shared";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    gotoHome: false,
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    this.setState(() => ({ [id]: value }));
  };

  handleSubmit = (event) => {
    const { optionOneText, optionTwoText } = this.state;
    event.preventDefault();
    this.props.addQuestion(optionOneText, optionTwoText);
    this.setState({ gotoHome: true });
  };

  render() {
    const { optionOneText, optionTwoText, gotoHome } = this.state;
    if (!this.props.authedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              returnPath: "/new",
            },
          }}
        />
      );
    }

    if (gotoHome === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <Form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
          <section className="page-section bg-light">
            <div className="container-fluid">
              <div className="text-center">
                <h3 className="section-heading text-uppercase">
                  Create new question
                </h3>
                <h3 className="section-subheading text-muted">
                  Complete the question
                </h3>
                <h3 className="section-heading">Would You Rather...</h3>
              </div>
            </div>
            <br />

            <FormGroup row>
              <Col className="offset-md-1" sm={10}>
                <Input
                  type="text"
                  id="optionOneText"
                  placeholder="Enter Option one text here"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <Label className="text-center offset-md-5">OR</Label>
            <FormGroup row>
              <Col className="offset-md-1" sm={10}>
                <Input
                  type="text"
                  id="optionTwoText"
                  placeholder="Enter Option two text here"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <br />
            <Button
              color="secondary"
              size="lg"
              block
              disabled={optionOneText === "" || optionTwoText === "" || optionOneText === optionTwoText }
            >
              Submit
            </Button>
          </section>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOnetext, optionTwotext) => {
      dispatch(handleAddQuestion(optionOnetext, optionTwotext));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
