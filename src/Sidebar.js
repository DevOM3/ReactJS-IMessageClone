import './Sidebar.css';
import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { RateReviewOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, []);

    const addChat = () => {
        const chatName = prompt("Enter a Chat name");

        if (chatName) {
            db.collection('chats').add({
                chatName: chatName,
            });
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user.photo} className="sidebar__avatar" onClick={() => auth.signOut()} />
                <IconButton>
                    <RateReviewOutlined onClick={addChat} />
                </IconButton>
            </div>

            <div className="sidebar__chat">
                {
                    chats.map(({ id, data }) => <SidebarChat key={id} id={id} chatName={data.chatName} />)
                }
            </div>
        </div>
    )
}

export default Sidebar;
