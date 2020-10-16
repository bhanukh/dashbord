import React from 'react';
import './user.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const User = () => {
    return ( <
        >
        <
        div className = "use" >
        <
        div className = "lr" >
        <
        img className = "chatimg"
        src = "https://s-media-cache-ak0.pinimg.com/736x/bd/f5/5c/bdf55ca795b225b8f47018f2c6f7f875--lucy-griffiths-robin-hood-bbc.jpg" / >
        <
        div className = "user" >
        <
        h3 > Luy Robin < /h3> 

        <
        span > < a > < MoreHorizIcon className = "icon"
        style = {
            { marginRight: "1px" }
        }
        / > Typing < /a > < /span > < /
        div >
        <
        div className = "time" > < span > 1 minute ago < /span> < /div > < /div> <
        div className = "para" >
        <
        p > Most of its text is made up from sections 1.10 .32– 3 of Cicero 's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p> <
        span class = "dot" > 2 < /span> < /
        div > < /div>< / >
    )
};
export default User;