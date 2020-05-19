import React, {ChangeEvent, useState} from 'react';
import './ChatBox.scss'
import {connect, ConnectedProps} from "react-redux";
import {sendMessage} from "../redux/actions";

const mapDispatch = {
    sendMessage
}
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

function ChatBox(props: PropsFromRedux) {

    const [currentMessage, setCurrentMessage] = useState("")


    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.sendMessage(currentMessage)
            setCurrentMessage("")
        }
    }

    const handleSendClick = () => {
        props.sendMessage(currentMessage)
        setCurrentMessage("")
    }

    return (
        <div className={"ChatBox"}>
            <div className={"ChatInput"}>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentMessage(e.target.value)}
                    onKeyDownCapture={handleEnterKey}
                    placeholder={"Message Someone"}
                    value={currentMessage}
                />
            </div>
            <button disabled={currentMessage.length === 0} onClick={handleSendClick}>SEND</button>
        </div>
    );
}

export default connector(ChatBox);
