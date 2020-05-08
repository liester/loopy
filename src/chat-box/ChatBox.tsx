import React from 'react';
import './ChatBox.scss'
import MessageBox from "../message-box/MessageBox";
import MessageArea from "../message-area/MessageArea";

function ChatBox() {
    return (
        <div className={"ChatBox"}>
            <MessageArea/>
            <MessageBox/>
        </div>
    );
}

export default ChatBox;
