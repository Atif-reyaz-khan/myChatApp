import React, { useEffect, useState } from "react";
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChats from "./SidebarChats";
import { SearchOutlined } from "@material-ui/icons";
import db from './firebase'
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [rooms,setRooms]=useState([]);
  const[{user},dispatch]=useStateValue();
  useEffect(()=>{
    const unsubscribe=db.collection('rooms').onSnapshot(snapshot=>(
      setRooms(snapshot.docs.map(doc=>(
        {
          id:doc.id,
          data:doc.data(),
        }
      )))
      

  ));
  return ()=>{
    unsubscribe();
  }
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChats addNewChat/>
        {rooms.map(room=>(
          <SidebarChats key={room.d} id={room.id}
          name={room.data.name}/>

  ))}
   
      </div>
    </div>
  );
}

export default Sidebar;
