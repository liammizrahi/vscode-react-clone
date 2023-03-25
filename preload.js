const { contextBridge, ipcRenderer } = require("electron");
const path = require('path');

// Define the MonacoEnvironment object
const MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
            return `data:application/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: '${path.dirname(module.uri)}'
        };
        importScripts('${path.join(__dirname, 'json.worker.js')}');
      `)}`;
        }
        if (label === 'css') {
            return `data:application/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: '${path.dirname(module.uri)}'
        };
        importScripts('${path.join(__dirname, 'css.worker.js')}');
      `)}`;
        }
        return `data:application/javascript;charset=utf-8,${encodeURIComponent(`
      self.MonacoEnvironment = {
        baseUrl: '${path.dirname(module.uri)}'
      };
      importScripts('${path.join(__dirname, 'editor.worker.js')}');
    `)}`;
    },
};

// Set the MonacoEnvironment object
window.MonacoEnvironment = MonacoEnvironment;

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("ipc", {
    send: (channel, data) => {
        // whitelist channels
        let validChannels = ["toMain"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
        let validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },
});
