import React from "react";
import "./styles.css";
import CardList from "./CardList";
import Form from "./Form";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Github cards App</h1>
        <Form />
        <CardList />
      </div>
    );
  }
}
