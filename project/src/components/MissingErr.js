import React from "react";
import { Link } from "react-router-dom";

function MissingErr() {
  return (
    <div>
      <h1>ERROR 404: No questions found !!! </h1>
      <br/>
      <Link to='/home'>Go Home</Link>
    </div>
  );
}

export default MissingErr;
