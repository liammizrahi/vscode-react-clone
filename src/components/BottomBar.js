import React from "react";
import "../styles/BottomBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
    // const [bottomBarLeftText, setBottomBarLeftText] = useState('Line 5, Column 15');

    return (
        <div className="bottom-bar">
            <div className="bottom-bar-left"></div>
            <div className="bottom-bar-right">
                <button className="toolbar-button">
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </div>
    );
}

BottomBar.handleTextInputChange = (text) => {
    let counter = "";
    counter = text.split("\n").length + " Rows, " + text.length + " Characters"
    const bottomBarLeft = document.querySelector(".bottom-bar-left");
    bottomBarLeft.innerText = counter;
};

export default BottomBar;
