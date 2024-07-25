import React from 'react'
import Title from './Title'
import Button from './Button'
import SubTitle from './SubTitle'

export default function Task({ task, onDelete }) {

    function deleteTask()
    {
        onDelete(task.taskTitle)
    }

    return (
        <div className="flex flex-col w-64 h-36 bg-plantcolor rounded-lg items-start p-5">
            <div className='flex flex-row justify-between items-center w-full text-center'>

                <Title content={task.taskTitle} />
                <Button variant="ghost" className="text-xs" onClick={deleteTask}>Delete</Button>


            </div>
            <div className='pt-2'>
                <SubTitle content={task.taskDetails} />
            </div>

        </div>
    )
}
