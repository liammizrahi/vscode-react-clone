import React from "react";
import "../styles/BottomBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
    return (
        <div className="bottom-bar">
            <div className="bottom-bar-left">Line 5, Column 15</div>
            <div className="bottom-bar-right">
                <button className="toolbar-button">
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </div>
    );
}

export default BottomBar;
