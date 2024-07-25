import React from 'react'

export default function Input({
    className,
    ...props
}) {
    return (
        <input {...props} className={`border-2 border-black w-3/4 ${className}`} />
    )
}
