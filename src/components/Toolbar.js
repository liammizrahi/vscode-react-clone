import React from "react";
import "../styles/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSave,
    faUndo,
    faRedo,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Toolbar() {
    return (
        <div className="toolbar">
            <div className="toolbar-left">
                <button className="toolbar-button">
                    <FontAwesomeIcon icon={faSave} />
                </button>
                <button className="toolbar-button">
                    <FontAwesomeIcon icon={faUndo} />
                </button>
                <button className="toolbar-button">
                    <FontAwesomeIcon icon={faRedo} />
                </button>
            </div>
            <div className="toolbar-right">
                <input className="search-input" type="text" placeholder="Search" />
                <button className="toolbar-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}

export default Toolbar;
