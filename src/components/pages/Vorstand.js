import React from "react";

export default function Vorstand() {
  return (
    <div className="hero is-danger is-fullheight" id="vorstand">
      <div className="overlay is-fullheight is-overlay" />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-4">Vorstand</h1>
          <div className="columns">
            <div className="column">
              <div className="card has-background-black has-text-white">
                <div className="card-content has-text-justified">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="/images/vorstand2.jpg" alt="vorstand1" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-5 has-text-white">
                        Konstantin Kleim
                      </p>
                      <p className="subtitle is-6 has-text-danger">
                        Abteilungsleiter und Cheftrainer
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <div>
                      <span className="icon">
                        <i className="fas fa-envelope" />
                      </span>
                      <span>kleim91@gmx.de</span>
                    </div>
                    <div>
                      <span className="icon">
                        <i className="fas fa-phone" />
                      </span>
                      <span>(0176) 32453870</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card has-background-black has-text-white">
                <div className="card-content has-text-justified">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="/images/vorstand4.jpg" alt="vorstand1" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-5 has-text-white">Denis Kleim</p>
                      <p className="subtitle is-6 has-text-danger">
                        Stellvertretender Abteilungsleiter und Trainer
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <div>
                      <span className="icon">
                        <i className="fas fa-envelope" />
                      </span>
                      <span>d.kleim97@gmx.de</span>
                    </div>
                    <div>
                      <span className="icon">
                        <i className="fas fa-phone" />
                      </span>
                      <span>(0176) 70367735</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
