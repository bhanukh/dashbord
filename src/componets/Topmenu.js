import React from 'react';
import './topmenu.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import ChatIcon from '@material-ui/icons/Chat';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const Topmenu = () => {
    return ( <
        >
        <
        div className = "menu" >

        <
        img src = "http://www.dandzombak.com/wp-content/uploads/2014/09/Steve-Jobs-Secret-of-Life.jpg" / >

        <
        h1 > Henry Jabbawockiez < ExpandMoreIcon className = "expand" / > < /h1>


        <
        ul >
        <
        li > < a href = "#" > < AppsIcon className = "icon" / > HOME < /a> </li >
        <
        li > < a href = "#" > < ChatIcon className = "icon" / > CHAT < /a> </li >
        <
        li > < a href = "#" > < PersonOutlineOutlinedIcon className = "icon" / > CONTACT < /a> </li >
        <
        li > < a href = "#" > < NotificationsNoneIcon className = "icon" / > NOTIFICATION < /a> </li >
        <
        li > < a href = "#" > < DateRangeIcon className = "icon" / > CALENDER < /a> </li >

        <
        li > < a href = "#" > < SettingsOutlinedIcon className = "icon" / > SETTINGS < /a> </li >
        <
        li className = "last" > < a href = "#" > < PowerSettingsNewIcon className = "icon" / > LOG OUT < /a> </li >


        <
        /ul>




        <
        /div>

        <
        / >
    )
};
export default Topmenu;