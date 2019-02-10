import React, { Component } from "react";

class SocialCard extends Component {
  state = {};
  render() {
    return (
      <div className="social-cards">
        {this.props.data.map(card => (
          <div className="social-card" key={card.id_str}>
            <div className="social-card-user">
              <div className="social-card-user-avatar">{card.user.name[0]}</div>
              <div className="social-card-user-name">
                <p>{card.user.name}</p>
                <p className="social-card-user-screen_name">
                  @{card.user.screen_name} - {card.user.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SocialCard;
