import React, { useState } from "react";
import "../styles/FileExplorer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function FileExplorer() {
    const [files, setFiles] = useState([]);

    const isElectron = () => {
        return typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.type === 'renderer';
    };

    const handleOpenDirectory = async () => {
        try {
            const result = await window.electron.remote.dialog.showOpenDialog({
                properties: ["openDirectory"],
            });

            if (!result.canceled) {
                const fs = window.electron.remote.require("fs");
                const path = window.electron.remote.require("path");

                const directoryPath = result.filePaths[0];
                const fileList = fs.readdirSync(directoryPath);

                const files = fileList.map((fileName) => {
                    const filePath = path.join(directoryPath, fileName);
                    const isDirectory = fs.lstatSync(filePath).isDirectory();
                    return { name: fileName, path: filePath, isDirectory };
                });

                setFiles(files);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="file-explorer">
            <div className="file-explorer-header">
                Explorer
                <button onClick={handleOpenDirectory}><FontAwesomeIcon icon={faFolderOpen}/></button>
            </div>
            <div className="file-explorer-list">
                {files.map((file, index) => (
                    <div key={index} className="file-explorer-item">
                        <FontAwesomeIcon icon={file.isDirectory ? faFolder : faFile} />
                        <span>{file.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileExplorer;
