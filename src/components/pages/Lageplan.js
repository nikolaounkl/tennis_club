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
                            <i className="fas fa-car fa-lg" />
                            <i className="fas fa-train fa-lg" />
                            <i className="fas fa-bus fa-lg" />
                            <i className="fas fa-bicycle fa-lg" />
                            <i className="fas fa-walking fa-lg" />
                        </div>
                        <div className="column is-half-desktop">
                            <iframe
                                src="http://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d11288.856829600325!2d13.559298990818792!3d52.56679278143259!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d52.567119999999996!2d13.55996!5e0!3m2!1sen!2sus!4v1521145257039"
                                title="map"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
