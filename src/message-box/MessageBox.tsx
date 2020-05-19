import React from 'react';
import './MessageBox.scss'
import {connect, ConnectedProps} from "react-redux";
import {} from 'redux'
import {sendMessage, getMessages} from "../redux/actions";

const mapDispatchToProps = {
    sendMessage,
    getMessages,
}

const mapStateToProps = ({messageStore}: { messageStore: any }) => {
    return {
        messages: messageStore.messages
    };

};
const connector = connect(mapStateToProps, mapDispatchToProps)

type MessageBoxProps = ConnectedProps<typeof connector>

function MessageBox(props: MessageBoxProps) {

    React.useEffect(() => {
        props.getMessages()
    }, [])

    return (
        <div className={"MessageBox"}>
            {props.messages.map((message: any, index: number) => {
                return (
                    <div className={'message'} key={index}>
                        <div><span className={'message-name'}>{`${message.from}`}</span> <span className={'message-time'}>{`${message.date}`}</span></div>
                        <div className={'message-text'}>{`${message.text}`}</div>
                    </div>
                )
            })}
        </div>
    );
}


export default connector(MessageBox);
