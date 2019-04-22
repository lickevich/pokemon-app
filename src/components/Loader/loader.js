import React, { Component } from "react";

import "./loader.css";

export default class Loader extends Component {

    render() {
        return (
            <div class="lds-css ng-scope">
                <div class="lds-disk">
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}