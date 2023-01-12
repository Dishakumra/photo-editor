import React from 'react'

export default function SidebarItem({name,active,handleClick}) {
  return (
    <div>
        <button 
        onClick={handleClick}
        className={`sidebar-item ${active?'active':''}`}>{name}</button>
      
    </div>
  )
}
