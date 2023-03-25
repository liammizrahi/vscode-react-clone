import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";
import "./styles/MonacoEditor.css";

function MonacoEditor() {
    const editorRef = useRef(null);

    window.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
            return './assets/editor.worker.bundle.js';
        },
        getWorker: function (moduleId, label) {
            return new Worker('./assets/editor.worker.bundle.js');
        },
    };

    useEffect(() => {
        if (editorRef.current) {
            monaco.editor.create(editorRef.current, {
                value: ["function x() {", '\tconsole.log("Hello, world!");', "}"].join(
                    "\n"
                ),
                language: "javascript",
            });
            monaco.editor.setTheme('vs-dark');
        }
    }, []);

    return <div className="monaco-editor" ref={editorRef}></div>;
}

export default MonacoEditor;
