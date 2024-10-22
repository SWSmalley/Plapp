import React from 'react'

export default function SmallFormContainer({ children, onSubmit, id }) {
  return (
    <form id = {id}className='flex flex-col flex-nowrap items-center m-auto' onSubmit={onSubmit}>
        {children}
    </form>
  )
}
