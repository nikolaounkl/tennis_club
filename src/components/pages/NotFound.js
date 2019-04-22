import React from "react";

export default function NotFound() {
    return (
        <div className="hero is-danger is-fullheight" id="not-found">
            <div className="overlay is-fullheight is-overlay" />
            <div className="hero-body">
                <div className="container has-text-justified">
                    <h1 className="title is-1 is-size-2-mobile has-text-danger has-text-weight-light">
                        404 <span className="has-text-white">Error</span>
                    </h1>
                    <h2 className="subtitle is-5 has-text-weight-light	">
                        Sorry, the page you are looking for could not be found
                    </h2>
                </div>
            </div>
        </div>
    );
}
