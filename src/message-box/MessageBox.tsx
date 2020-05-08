import React from 'react';
import './MessageBox.scss'
import MessageInput from "../message-input/MessageInput";

function MessageBox() {
    return (
        <div className={"MessageBox"}>
            <MessageInput/>
        </div>
    );
}

export default MessageBox;
