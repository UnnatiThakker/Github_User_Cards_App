import React from "react";
import "./styles.css";

export default class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img height="75" width="75" src={profile.avtar_url} alt="profile" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}
