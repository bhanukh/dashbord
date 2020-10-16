import React from 'react';
import './chats.css';
import User from './User.js'
import User1 from './User1.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Chats = () => {
    return ( <
        >
        <
        div className = "chats" >
        <
        div className = "flex" >

        <
        h2 className = "ch" > Chats < /h2> <
        h4 className = "rc" >

        Recent Chats < a href = "#" > < ExpandMoreIcon className = "icon" / > < /a> < /
        h4 >
        <
        button className = "btn" > < AddIcon className =
        "icons" / > Create New Chat < /button> < /
        div >
        <
        div className = "search" >
        <
        button > < SearchIcon className = "icon" / > Search < /button> <
        button style = {
            { float: "right" }
        } > Messages < ExpandMoreIcon className = "icon" / > < /button>< /
        div >
        <
        User / >
        <
        User1 / >
        <
        /
        div > < / >



    )
};
export default Chats;