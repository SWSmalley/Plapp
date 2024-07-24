import React from 'react'

export default function SmallFormContainer({ children, onSubmit }) {
  return (
    <form className='flex flex-col flex-nowrap items-center m-auto' onSubmit={onSubmit}>
        {children}
    </form>
  )
}
