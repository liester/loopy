import React from 'react';
import './ChatInput.scss'

type ChatInputProps = {
    onKeyDown(): any;
}

function ChatInput({onKeyDown}: ChatInputProps) {
    return (
        <div className={"ChatInput"}>
            <input onKeyDown={onKeyDown} placeholder={"Message Someone"}/>
        </div>
    );
}

export default ChatInput;
