import React, { useEffect } from 'react'
import { useState } from 'react'
import Teamuser from './Teamuser';
import {MdDelete} from 'react-icons/md'

const Teamlist = () => {
  const [team, setTeam] = useState({});
  window.addEventListener('storage', ()=>{
    setTeam(JSON.parse(window.localStorage.getItem('inTeam')));
  })
  useEffect(()=>{
    localStorage.setItem('inTeam', JSON.stringify(team));
    window.localStorage.setItem('prevTeam', JSON.stringify(team));
    
  },[team])
  var data={...team};
  const del=(val)=>{
    delete data[val.id];
    setTeam(data);
  }
  return (
    <div className='container team__list'>
      {Object.values(team).map((val, key)=>{
        return(
          <div key={key} id={val.id} className='added_users'>
          <div><Teamuser val={val}/></div>
          <div className='delete' onClick={()=>{del(val)}}><MdDelete/></div>
          </div>
        )
      })}
    </div>
  )
}

export default Teamlist