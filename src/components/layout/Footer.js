import React, { Component } from "react";

export default class Footer extends Component {
  impresium = () => {
    window.open(
      "http://www.tennis-fuechse-marzahn.de/images/verein-impressum.pdf"
    );
  };
  Datenschutz = () => {
    window.open("http://www.tennis-fuechse-marzahn.de/images/datenschutz.pdf");
  };
  agb = () => {
    window.open("http://www.tennis-fuechse-marzahn.de/images/agb_training.pdf");
  };
  render() {
    return (
      <nav className="level navbar is-black is-fixed-bottom is-hidden-mobile">
        <div className="level-item has-text-centered">
          <p className="link has-text-white is-size-7">
            Copyright © 2018 T.S.V. Marzahner Füchse e.V. | Created by
            <a
              className="link has-text-danger"
              href="https://nikolaounkl.github.io/me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="is-size-7"> NN</span>
            </a>
          </p>
        </div>
        <div className="level-item">
          <button
            className="link button is-black has-text-danger"
            onClick={this.impresium}
          >
            <span className="is-size-7">Impresium</span>
          </button>
        </div>
        <div className="level-item">
          <button
            className="link button is-black has-text-danger"
            onClick={this.Datenschutz}
          >
            <span className="is-size-7">Datenschutz</span>
          </button>
        </div>
        <div className="level-item">
          <button
            className="link button is-black has-text-danger"
            onClick={this.agb}
          >
            <span className="is-size-7">AGB Training</span>
          </button>
        </div>
      </nav>
    );
  }
}
