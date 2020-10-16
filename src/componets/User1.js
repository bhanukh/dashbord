import React from 'react';
import './user1.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoIcon from '@material-ui/icons/Photo';

const User1 = () => {
    return ( <
        >
        <
        div className = "use" >
        <
        div className = "lr" >
        <
        img className = "chatimg"
        src = "https://th.bing.com/th/id/OIP.TKZwg7WqqaBUS--jUjT0EQHaJ_?pid=Api&rs=1" / >
        <
        div className = "user" >
        <
        h3 > Jared Sunn < /h3> 

        <
        span > < a > < SettingsVoiceIcon className = "icon"
        style = {
            { marginRight: "1px" }
        }
        / > recording voice message  < /a > < /span > < /
        div >
        <
        div className = "time1" > < span > 1 minute ago < /span> < /div > < /div> <
        div className = "bt" >
        <
        button className = "btn1" > < DescriptionIcon className = "icon" / > file < /button> <
        button className = "btn1" > < PhotoIcon className = "icon" / > photo < /button>   <
        span class = "dot1" > 1 < /span> < /
        div > < /div>< / >
    )
};
export default User1;