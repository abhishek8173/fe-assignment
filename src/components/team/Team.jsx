import React from 'react'
import './team.css'
import Search from './search/Search'
import Teamlist from './Teamlist'

const Team = (props) => {
  const emp = props.emp;
  return (
    <div className='container team__container'>
      <div className='content'>
        <h1>Customer Success Managers</h1>
        <Search emp={emp}/>
        <Teamlist/>
      </div>
    </div>
  )
}

export default Team