import React from 'react';

export default function Event(props) {
    var count;
    if(!props.user) {
        count = '0'
    } else {
        count = props.user.length
    }
    
    return (
        <li>
            {props.el} 
            <span onClick={()=> {
            return props.clickHadler()}}> {count} going </span>
        </li>
        )
}