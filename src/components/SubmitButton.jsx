import React from 'react'

export default function SubmitButton({onClickFunction,buttonText,...props}) {
  return (
    <button type='submit' {...props}>{buttonText}</button>
  )
}
