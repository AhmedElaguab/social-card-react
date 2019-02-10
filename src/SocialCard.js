import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
                <p>
                  {card.user.name}
                  <a
                    className="social-card-user-url"
                    href={card.user.url}
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                  </a>
                </p>
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
