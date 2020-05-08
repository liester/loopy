import React from 'react';
import ChatBox from "./chat-box/ChatBox";
import Sidebar from "./sidebar/Sidebar";
import './App.css'

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <ChatBox/>
        </div>
    );
}

export default App;
