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

    return (
        <div className={"ChatBox"}>
            <div className={"ChatInput"}>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> setCurrentMessage(e.target.value)}
                    placeholder={"Message Someone"}
                    value={currentMessage}
                />
            </div>
            <button disabled={currentMessage.length === 0 } onClick={() => {
                props.sendMessage(currentMessage)
                setCurrentMessage("")
            }}>SEND</button>
        </div>
    );
}

export default connector(ChatBox);
