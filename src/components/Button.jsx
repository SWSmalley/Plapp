import React from 'react'

const variants = {
    "primary" : "text-white bg-green-800",
    "secondary": "text-black bg-gray-900",
    "ghost" : "text-gray-500 bg-transparent"
}


export default function Button({
    variant = "primary",
    className,
    children,
    ...props
}) {
  return (
    <button className={`font-extrabold p-1 ${variants[variant]} ${className}`} {...props}>
        {children}
    </button>
  )
}
