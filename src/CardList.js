import React from "react";
import "./styles.css";
import Card from "./Card";

const testData = [
  {
    name: "Unnati Thakker",
    avtar_url: "https://i.pravatar.cc/75?img=1",
    company: "Amazon"
  },
  {
    name: "Pranav Raval",
    avtar_url: "https://i.pravatar.cc/75?img=2",
    company: "Google"
  },
  {
    name: "Vinit Saboo",
    avtar_url: "https://i.pravatar.cc/75?img=3",
    company: "Facebook"
  }
];

export default class CardList extends React.Component {
  render() {
    return (
      <div className="list-users">
        {testData.map((profile) => (
          <Card {...profile} />
        ))}
      </div>
    );
  }
}
