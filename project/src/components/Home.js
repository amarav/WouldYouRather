import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import Questions from "./Questions";
import AnsweredQues from "./AnsweredQues";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  state = {
    myTab: "1",
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        myTab: tab,
      });
    }
  }

  render() {
    const { unAnsweredQues, authedUser, answeredQues } = this.props;

    if (!authedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              returnPath: "/home",
            },
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <div className="col-md-8 offset-md-2">
          <br />
          <br />
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.myTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Unanswered Questions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.myTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Answered Questions
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.myTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div>
                    {unAnsweredQues.map((ques, index) => (
                      <Questions key={index} id={ques} />
                    ))}
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              {answeredQues.map((ques, index) => (
                <Questions key={index} id={ques} />
              ))}
            </TabPane>
          </TabContent>
        </div>
        }
      </React.Fragment>
    );
  }
}

function mapStatetoProps({ users, authedUser, questions }) {
  const user = authedUser !== null ? users[authedUser] : "";
  const answeredQues =
    authedUser !== null
      ? Object.keys(user.answers).sort(
          (a, b) => questions[b].timestamp - questions[a].timestamp
        )
      : "";
  const unAnsweredQues =
    authedUser !== null
      ? Object.keys(questions)
          .filter((question) => !answeredQues.includes(question))
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      : "";

  return {
    authedUser,
    answeredQues,
    unAnsweredQues,
    questions,
  };
}

export default connect(mapStatetoProps)(Home);
