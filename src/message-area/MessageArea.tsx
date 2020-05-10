import React from 'react';
import './MessageArea.scss'
import MessageBox from "../message-box/MessageBox";
import ChatBox from "../chat-box/ChatBox";

function MessageArea() {
    return (
        <div className={"MessageArea"}>
            <MessageBox/>
            <ChatBox/>
        </div>
    );
}

export default MessageArea;

