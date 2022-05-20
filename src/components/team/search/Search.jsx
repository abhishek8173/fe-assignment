import React, { useEffect } from 'react'
import { useState } from 'react';
import Recommendation from './suggestions/Recommendation'
import {GrFormClose} from 'react-icons/gr'

const Search = (props) => {
  const[inTeam, setInTeam] = useState({});
  const data=props.emp;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState({});
  window.addEventListener('storage_from_teamlist', ()=>{
    setInTeam(JSON.parse(window.localStorage.getItem('inTeam')));

  })
  useEffect(()=>{
    const selectedUsers=JSON.parse(localStorage.getItem('selectedUsers'));
    if (selectedUsers){
      setSelectedUsers(selectedUsers);
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers));
  }, [selectedUsers]);
  useEffect(()=>{
    localStorage.setItem('inTeam', JSON.stringify(inTeam));
    setSelectedUsers({});
    window.dispatchEvent(new Event('storage'));
  },[inTeam]);
  const select_user=(val)=>{
      setSelectedUsers(prevState =>({
        ...prevState, [val.id]: val
      }))
      
  }
  const update_team=()=>{
    setInTeam(prevState=>({...prevState, ...selectedUsers}));
  }
  const sgstns=(data)=>{
    return(
      <div className='container sgstns__container'>
    {data.filter((val)=>{
      if (searchTerm===""){
        return null;
      }
      else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())){
        return val;
      }
    }).map((val, key) => {
      return (
        <div key={key} onClick={()=>{select_user(val)}}>
          <Recommendation val={val}/>
        </div>
      )
    })
    }
    </div>
    )
  }
  const suggest=(searchTerm, data)=>{
    if(searchTerm!==""){
      return(
        <>{sgstns(data)}</>
      )
    }
  }
  const checkLast = (user) => {
    if (user.hasOwnProperty('last_name')){
      return user.last_name;
    }
    return '';
  }
  let list={...selectedUsers};
  const rem=(val)=>{
    delete list[val.id];
    setSelectedUsers(list);
  }
  return (
    <>
    <div className='container search__container'>
      <div className='search_list'>
        {Object.values(selectedUsers).map((val, key)=>{
          return(
            <div key={key} className='to_be_added'>
              <div className='user'>{val.first_name+' '+checkLast(val)}</div>
              <div className='remove' onClick={()=>{rem(val)}}><GrFormClose/></div>
            </div>
          )
        })
        }
      </div>
      <input type='text' placeholder='Add by Name or Email' onChange={event => {setSearchTerm(event.target.value)}}/>
      <button className='btn add__btn' onClick={()=>{update_team()}}>Add CSM</button>
    </div>
    {suggest(searchTerm,data)}
    </>
  )
}

export default Search