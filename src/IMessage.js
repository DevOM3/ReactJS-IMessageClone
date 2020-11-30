import './IMessage.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';

const IMessage = () => {
    return (
        <div className="iMessage">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default IMessage;
