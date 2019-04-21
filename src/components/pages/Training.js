import React from "react";

export default function Training() {
    return (
        <div className="hero is-danger is-fullheight" id="training">
            <div className="overlay is-fullheight is-overlay" />
            <div className="hero-body">
                <div className="container has-text-justified">
                    <h1 className="title is-4">Tennistraining bei uns</h1>
                    <hr className="has-background-danger" />
                    <p>
                        Die Preise unseres Trainingsangebotes sind abhängig von
                        der Gruppengröße und werden pro Stunde (60 Minuten)
                        berechnet. <br />
                        Bei weiteren Fragen kontaktieren Sie bitte unseren
                        Sportwart Konstantin Kleim.
                    </p>
                    <br />
                    <div className="columns has-text-centered">
                        <div className="column">
                            <div className="card has-background-black">
                                <div className="card-content">
                                    <i class="fas fa-male fa-2x" />
                                    <hr />
                                    <p className="title is-5">
                                        Einzeltraining - 28€
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card has-background-black">
                                <div className="card-content">
                                    <i class="fas fa-male fa-2x" />
                                    <i class="fas fa-male fa-2x" />
                                    <hr />
                                    <p className="title is-5">
                                        Pro Person - 14€
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card has-background-black">
                                <div className="card-content">
                                    <i class="fas fa-male fa-2x" />
                                    <i class="fas fa-male fa-2x" />
                                    <i class="fas fa-male fa-2x" />
                                    <hr />
                                    <p className="title is-5">
                                        Pro Person - 9€
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card has-background-black">
                                <div className="card-content">
                                    <i class="fas fa-male fa-2x" />
                                    <i class="fas fa-male fa-2x" />
                                    <i class="fas fa-male fa-2x" />
                                    <i class="fas fa-male fa-2x" />
                                    <hr />
                                    <p className="title is-5">
                                        Pro Person - 7€
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
