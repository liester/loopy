import React, {useEffect, useState} from 'react';
import './ChatBox.scss'
import ChatInput from "../chat-input/ChatInput";
import {connect, ConnectedProps} from "react-redux";
import {addMessage} from "../redux/actions";


const mapDispatch = {
    addMessage
}
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const chatInputRef = React.createRef<HTMLDivElement>();
const chatBoxRef = React.createRef<HTMLDivElement>()

function ChatBox(props: PropsFromRedux) {

    const [currentMessage, setCurrentMessage] = useState("")

    useEffect(()=>{
        //@ts-ignore
       chatInputRef.current.addEventListener('input', (e)=>console.log(e.target.value))
    }, [chatBoxRef, chatInputRef])

    return (
        <div ref={chatBoxRef} className={"ChatBox"}>
            <ChatInput ref={chatInputRef} onChange={(e: Event) => {
                //@ts-ignore
                setCurrentMessage(e.target.value)
            }}/>
            <button disabled={currentMessage.length === 0 } onClick={() => props.addMessage(currentMessage)}>SEND</button>
        </div>
    );
}

export default connector(ChatBox);
