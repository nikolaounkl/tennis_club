import React, { Component } from "react";

export default class Verein extends Component {
    downloadPDF = () => {
        window.open(
            "http://" + window.location.hostname + "/images/mitgliedschaft.pdf"
        );
    };
    render() {
        return (
            <div className="hero is-danger is-fullheight" id="verein">
                <div className="overlay is-fullheight is-overlay" />
                <div className="hero-body">
                    <div className="container has-text-centered has-text-justified">
                        <h1 className="title is-4">
                            Sie möchten einen Verein mit Herz und familiärer
                            Atmosphäre, der Aktivitäten für die ganze Familie
                            bietet?
                        </h1>
                        <h2 className="subtitle is-5">
                            Dann heißen wir Sie bei uns, im Tennisclub der
                            Marzahner Füchse, herzlich willkommen!
                        </h2>
                        <hr className="has-background-danger" />
                        <p>
                            Mit einer übersichtlichen Anzahl an
                            Vereinsmitgliedern bieten wir Ihnen eine gepflegte
                            Tennisanlage mit 3 Asche-Plätzen und einem kleinen
                            Vereinsblockhaus sowie einer Terrasse zum
                            gemütlichen Beisammensitzen. Bei uns spielen nicht
                            nur Anfänger, Hobby- und Gelegenheitsspieler,
                            sondern trainieren auch unsere Damen-, Herren- und
                            Jugendmannschaften im Wettkampf gegen andere
                            Tennisvereine aus dem Berliner und Brandenburger
                            Raum.
                        </p>
                        <br />
                        <p>
                            Unsere schöne Tennisanlage befindet sich im Norden
                            des Bezirks Marzahn in Berlin zwischen den S-
                            Bahnhöfen Ahrensfelde und Mehrower Allee, von denen
                            aus Sie nur 8 Gehminuten zum Tennisplatz benötigen.
                            Öffentliche Parkplätze befinden sich direkt am
                            Haupteingang zum Sportplatz.
                        </p>
                        <br />
                        <p>
                            Kommen Sie einfach mal vorbei oder kontaktieren Sie
                            uns. Wir freuen uns auf jeden Tennisbegeisterten!
                        </p>
                        <br />
                        <button
                            className="button is-danger"
                            onClick={this.downloadPDF}
                        >
                            <span className="icon">
                                <i className="fas fa-download" />
                            </span>
                            <span className="has-text-weight-semibold">
                                Mitglied werden
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
