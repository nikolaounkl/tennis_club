import React from "react";

export default function Home() {
    return (
        <div className="hero is-danger is-fullheight" id="home">
            <div className="overlay is-fullheight is-overlay" />
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 is-size-2-mobile has-text-danger has-text-weight-light	">
                        Abteilung <span className="has-text-white">Tennis</span>
                    </h1>
                    <h2 className="subtitle is-5 has-text-weight-light	">
                        Tennis spielen im Osten von Berlin
                    </h2>
                </div>
            </div>
        </div>
    );
}
