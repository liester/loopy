import React from 'react';
import './ChatBox.scss'
import ChatInput from "../chat-input/ChatInput";

function ChatBox() {
    return (
        <div className={"ChatBox"}>
            <ChatInput onKeyDown={()=>console.log('keydown')}/>
        </div>
    );
}

export default ChatBox;
