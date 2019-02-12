import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class SocialCard extends Component {
  state = {};
  render() {
    return (
      <div className="social-cards">
        {this.props.data.map(card => {
          var date = new Intl.DateTimeFormat("en-US", {
            format: "long"
          }).format(new Date(card.created_at));

          return (
            <div className="social-card" key={card.id_str}>
              <div className="social-card-user">
                <div className="social-card-user-avatar">
                  {card.user.name[0]}
                </div>
                <div className="social-card-user-name">
                  <p>
                    {card.user.name}
                    <a
                      className="social-card-user-url"
                      href={card.user.url}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    </a>
                  </p>
                  <p className="social-card-user-screen_name">
                    @{card.user.screen_name} - {card.user.location}
                  </p>
                </div>
              </div>
              <div className="social-card-body">
                <div className="social-card-body-entities">
                  {card.entities.urls && (
                    <a
                      href={card.entities.urls[0].url}
                      className="social-card-body-entities-url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.entities.urls[0].unwound.title}
                      <br />
                      <hr />
                      <small>{card.entities.urls[0].url}</small>
                    </a>
                  )}
                </div>
                <p className="social-card-body-p">{card.text}</p>
              </div>
              <div className="social-card-footer">
                <p className="social-card-footer-date">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SocialCard;
