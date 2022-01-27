import React from "react";
import "./styles.css";

export default class Form extends React.Component {
  render() {
    return (
      <div className="userform">
        <form action="">
          <input
            className="inputuser"
            type="text"
            placeholder="Enter Github Username"
          />
          <button className="addbtn">Add Card</button>
        </form>
      </div>
    );
  }
}
