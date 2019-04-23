import React, { Component } from "react";

export default class Footer extends Component {
    openPDF = () => {

    };
    render() {
        return (
            <nav className="level navbar is-black is-fixed-bottom">
                <div className="level-item has-text-centered">
                    <p className="link has-text-white ">Copyright © 2018 T.S.V. Marzahner Füchse e.V.</p>
                </div>
                <div className="level-item">
                    <a
                        className="link has-text-danger"
                        href="http://www.nikolaounikolaos.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="has-text-weight-semibold">
                            Created by NN
                        </span>
                    </a>
                </div>
            </nav>
        );
    }
}
