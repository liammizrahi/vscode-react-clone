import React from "react";
import Toolbar from "./components/Toolbar";
import Tab from "./components/Tab";
import FileExplorer from "./components/FileExplorer";
import BottomBar from "./components/BottomBar";
import MonacoEditor from "./MonacoEditor";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Toolbar />
            <div className="tabs">
                <Tab name="File1.js" />
                <Tab name="File2.css" />
                <Tab name="File3.html" />
            </div>
            <div className="main">
                <FileExplorer />
                <MonacoEditor />
            </div>
            <BottomBar />
        </div>
    );
}

export default App;
