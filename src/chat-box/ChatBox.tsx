import React from 'react';
import './ChatBox.scss'
import ChatInput from "../chat-input/ChatInput";

function ChatBox() {
    return (
        <div className={"ChatBox"}>
            <ChatInput/>
        </div>
    );
}

export default ChatBox;
