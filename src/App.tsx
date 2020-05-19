import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import './App.css'
import MessageArea from "./message-area/MessageArea";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <MessageArea/>
        </div>
    );
}

export default App;
