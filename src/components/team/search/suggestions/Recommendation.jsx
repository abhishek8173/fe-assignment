import React from 'react'
import './recomendation.css'
import {FaUser} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'

const Item = (props) => {
  var last='';
  var first=props.val.first_name;
  var job=props.val.job_title;
  var email=props.val.email;
  const checkLast = (user) => {
    if (user.hasOwnProperty('last_name')){
      last=user.last_name
      return user.last_name[0];
    }
    return '';
  }
  var inits = props.val.first_name[0] + checkLast(props.val);
  return (
    <div className='container recommendation__container'>
      <div className='initials'>
        <p>{inits}</p>
      </div>
      <div className='user__info'>
        <p id='name'>{first+' '+last}</p>
        <p id='details'><FaUser/> {job} <GoPrimitiveDot/> {email}</p>
      </div>
    </div>
  )
}

export default Item