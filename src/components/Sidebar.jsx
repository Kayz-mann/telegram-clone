import { Avatar, IconButton } from '@material-ui/core'
import { BorderColorOutlined, PhoneOutlined, QuestionAnswerOutlined, Search, Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db, { auth } from '../firebase'
import "./Sidebar.css"
import SidebarThread from './SidebarThread'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [threads, setThreads] = useState([])

    useEffect(() => {
        
        db.collection("threads").onSnapshot((snapshot) =>
        setThreads(snapshot.docs.map((doc) => ({
            id:doc.id,
            data:doc.data(),
        }))))
    }, [])

    const addThread = (e) => {
        e.preventDefault()
        const threadName = prompt("Enter thread name")
        if(threadName){
            db.collection("threads").add({
                threadName:threadName,
            })
        }
    }
    
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <Search className="sidebar__searchIcon" />
                    <input placeholder="Search" className="sidebar__input" />
                </div>
                <IconButton variant="outlined" id="sidebar__button">
                <BorderColorOutlined onClick={addThread} />
                </IconButton>
            </div>
            <div className="sidebar__threads">
                {threads.map(({id, data: {threadName}}) => (
                    <SidebarThread key={id} id={id} threadName={threadName} />
                ))}
            </div>
            <div className="sidebar__bottom">
                <Avatar onClick={() => auth.signOut()} 
                src={user.photo} 
                className="sidebar__bottom__avatar"  />
                <IconButton>
                    <PhoneOutlined />
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlined />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
