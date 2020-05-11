import React from 'react';
import './MessageBox.scss'
import {connect} from "react-redux";

type MessageBoxProps = {
    messages: any,
}

function MessageBox(props: MessageBoxProps) {

    return (
        <div className={"MessageBox"}>
            {props.messages.map((message: any, index: number) => {
               return (<div key={index}>
                    <span>{`${message.from}: ${message.text}`}</span>
                </div>)
            })}
        </div>
    );
}
const mapStateToProps = ({messageStore}: {messageStore: any}) => {
    return {
        messages: messageStore.messages
    };

};

export default connect(
    mapStateToProps,
)(MessageBox);
