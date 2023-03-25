import React from "react";
import "../styles/FileExplorer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";

function FileExplorer() {
    return (
        <div className="file-explorer">
            <div className="file-explorer-header">Explorer</div>
            <div className="file-explorer-list">
                <div className="file-explorer-item">
                    <FontAwesomeIcon icon={faFolder} />
                    <span>Folder1</span>
                </div>
                <div className="file-explorer-item">
                    <FontAwesomeIcon icon={faFile} />
                    <span>File1.js</span>
                </div>
                <div className="file-explorer-item">
                    <FontAwesomeIcon icon={faFile} />
                    <span>File2.css</span>
                </div>
                <div className="file-explorer-item">
                    <FontAwesomeIcon icon={faFile} />
                    <span>File3.html</span>
                </div>
            </div>
        </div>
    );
}

export default FileExplorer;
