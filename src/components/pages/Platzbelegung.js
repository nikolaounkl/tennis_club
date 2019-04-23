import React from "react";

export default function Platzbelegung() {
    return (
        <div className="hero is-danger is-fullheight" id="platzbelegung">
            <div className="overlay is-fullheight is-overlay" />
            <div className="hero-body">
                <div className="container has-text-centered has-text-justified">
                    <div className="column is-two-thirds-desktop">
                        <h1 className="title is-4">Platzbelegung</h1>
                        <p>
                            In der Sommersaison spielen wir auf unseren drei
                            Sandplätzen. An Wochenenden von Mai bis September
                            werden die Plätze für die Punktspiele benötigt.
                            <br />
                            Im Winter trainieren wir in Sporthallen mit
                            Multifunktionsböden. Leider haben wir im Winter
                            keine regulären freien Spieletermine.
                        </p>
                        <br />
                        <p>
                            Bei Fragen steht Ihnen gerne unser Sportwart
                            Konstantin Kleim zur Verfügung.
                        </p>
                    </div>
                    <br />
                    <div className="columns">
                        <div className="column">
                            <figure className="image">
                                <img
                                    src="images/tennisplatz5.jpg"
                                    alt="tennis platz"
                                />
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="image">
                                <img
                                    src="images/tennisplatz2.jpg"
                                    alt="tennis platz"
                                />
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="image">
                                <img
                                    src="images/tennisplatz7.jpg"
                                    alt="tennis platz"
                                />
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="image">
                                <img
                                    src="images/indoor.jpg"
                                    alt="tennis platz"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
