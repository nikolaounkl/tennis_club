import React from "react";

export default function Lageplan() {
    return (
        <div className="hero is-danger is-fullheight" id="lageplan">
            <div className="overlay is-fullheight is-overlay" />
            <div className="hero-body">
                <div className="container has-text-justified">
                    <div className="columns">
                        <div className="column is-half-desktop">
                            <h1 className="title is-4">Lageplan</h1>
                            <p>
                                Unsere familiäre Tennisanlage befindet sich im
                                Norden des Bezirks Marzahn in Berlin zwischen
                                den S- Bahnhöfen Ahrensfelde und Mehrower Allee,
                                von denen aus Sie nur 8 Gehminuten zum
                                Tennisplatz benötigen. Öffentliche Parkplätze
                                befinden sich direkt am Haupteingang zum
                                Sportplatz.
                            </p>
                            <br />
                            <p>
                                Auch die Sporthallen für die Trainingseinheiten
                                in der Wintersaison befinden sich in
                                Berlin-Marzahn, unweit von unserer Tennisanlage.
                                Alle 3 Sporthallen sind mit den öffentlichen
                                Verkehrsmitteln zu erreichen.
                            </p>
                            <br />
                            <a
                                className="has-text-white map-link"
                                href="https://goo.gl/maps/S8FKYnUSJhivyWVN7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-map-marker-alt has-text-danger" />
                                Geraer Ring 30, 12689 Berlin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
