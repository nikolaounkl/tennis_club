import React from "react";

export default function Training() {
    return (
        <div className="hero is-danger is-fullheight" id="training">
            <div className="overlay is-fullheight is-overlay" />
            <div className="hero-body">
                <div className="container has-text-left">
                    <div className="column is-half-desktop">
                        <h1 className="title is-4">Tennistraining bei uns</h1>
                        <hr className="has-background-danger" />
                        <p>
                            Die Preise unseres Trainingsangebotes sind abhängig
                            von der Gruppengröße und werden pro Stunde (60
                            Minuten) berechnet. <br />
                            Bei weiteren Fragen kontaktieren Sie bitte unseren
                            Sportwart Konstantin Kleim.
                        </p>
                        <br />
                        <div className="card has-background-white">
                            <div className="card-content">
                                <div>
                                    <p className="title is-5 has-text-black">
                                        <i className="fas fa-male" />{" "}
                                        Einzeltraining - 28€
                                    </p>
                                </div>
                                <br />
                                <div>
                                    <p className="title is-5 has-text-black">
                                        <i className="fas fa-male" />
                                        <i className="fas fa-male" /> Pro Person
                                        - 14€
                                    </p>
                                </div>
                                <br />
                                <div>
                                    <p className="title is-5 has-text-black">
                                        <i className="fas fa-male" />
                                        <i className="fas fa-male" />
                                        <i className="fas fa-male" /> Pro Person
                                        - 9€
                                    </p>
                                </div>
                                <br />
                                <div>
                                    <p className="title is-5 has-text-black">
                                        <i className="fas fa-male" />
                                        <i className="fas fa-male" />
                                        <i className="fas fa-male" />
                                        <i className="fas fa-male" /> Pro Person
                                        - 7€
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
