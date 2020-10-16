import React from 'react'
import './form.css'
import AddIcon from '@material-ui/icons/Add';
import PhotoIcon from '@material-ui/icons/Photo';
import DescriptionIcon from '@material-ui/icons/Description';
import TheatersIcon from '@material-ui/icons/Theaters';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Form = () => {
        return ( <
            >
            <
            TheatersIcon className = "ficon" / > < br / >
            <
            PhotoIcon className = "ficon" / > < br / >
            <
            DescriptionIcon className = "ficon" / > < br / >

            <
            div className = "form" >

            <
            form >
            <
            AddIcon className = "icon" / >
            <
            input placeholder = "write text here" / >
            <
            SentimentSatisfiedIcon className = "icon" / >
            <
            SendOutlinedIcon className = "icon" / >
            <
            /form>

            <
            /div>


            <
            />    )
        }
        export default Form;