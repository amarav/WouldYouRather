import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Leaderboard extends Component {
  render() {
    const { users, authedUser } = this.props;
    if (!authedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              returnPath: "/LeaderBoard",
            },
          }}
        />
      );
    }
    return (
      <React.Fragment>
        <div className="col-md-8 offset-md-2">
          <br />
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Leaderboard</h3>
          </div>
          <br />
          <br />
          {users.map((user) => (
            <div key={user.id} className="card">
              <div class="myrow">
                <div class="mycolumn">
                  <div
                    className="fullcard-avatar"
                    style={{ backgroundImage: `url(${user.avatarURL})` }}
                  />{" "}
                </div>

                <div class="mycolumn">
                  <div className="card-body">
                    <div className="text-center">
                      <h2>{user.name}</h2>
                    </div>
                    <br />
                    <ul className="list-group list-group-flush w-100">
                      <li className="text-center d-inline-block">
                        <p>Asked questions : {user.questions.length}</p>
                      </li>
                      <li className="text-center d-inline-block">
                        <p>
                          Answered questions :{" "}
                          {Object.keys(user.answers).length}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="column">
                  <div className="card-body d-inline-block">
                    <h3>
                      Total score:{" "}
                      {user.questions.length + Object.keys(user.answers).length}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.keys(users)
      .sort(
        (a, b) =>
          users[b].questions.length +
          Object.keys(users[b].answers).length -
          (users[a].questions.length + Object.keys(users[a].answers).length)
      )
      .map((user) => users[user]),
    authedUser,
  };
}

export default connect(mapStateToProps)(Leaderboard);
