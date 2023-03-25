import React from "react";
import Toolbar from "./components/Toolbar";
import Tab from "./components/Tab";
import FileExplorer from "./components/FileExplorer";
import BottomBar from "./components/BottomBar";
import MonacoEditor from "./MonacoEditor";
import "./styles/App.css";
import Editor from "@monaco-editor/react";

function App() {
    function handleEditorChange(value, event) {
        //console.log("here is the current model value:", value);
        BottomBar.handleTextInputChange(value);
    }

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
                <Editor
                    height="90vh"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    defaultValue="console.log('Hello World!');"
                    onChange={handleEditorChange}
                />
            </div>
            <BottomBar />
        </div>
    );
}

export default App;
