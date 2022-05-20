import React from 'react'
import {FaUser} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'
import { useState } from 'react'

const Teamuser = (props) => {
    var last='';
    var first=props.val.first_name;
    var job=props.val.job_title;
    var email=props.val.email;
    const [team, setTeam] = useState({});
    window.addEventListener('storage', ()=>{
        setTeam(JSON.parse(window.localStorage.getItem('inTeam')));
    })
    const checkLast = (user) => {
        if (user.hasOwnProperty('last_name')){
            last=user.last_name
            return user.last_name[0];
        }
        return '';
    }
    var initials=first[0]+checkLast(props.val);
  return (
    <div className='container team_user'>
        <div className='initialz'>
            <p>{initials}</p>
        </div>
        <div className='user__info'>
            <p id='name'>{first+' '+last}</p>
            <p id='details'><FaUser/> {job} <GoPrimitiveDot/> {email}</p>
        </div>
        
    </div>
  )
}

export default Teamuser