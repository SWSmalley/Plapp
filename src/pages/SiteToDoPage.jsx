import React, { useState } from 'react'
import PageRunner from '../components/PageRunner'
import CardContainer from '../components/CardContainer'
import SmallFormContainer from '../components/SmallFormContainer'
import TextInput from '../components/TextInput'

import Title from '../components/Title'

import Button from '../components/Button'
import Task from '../components/Task'

export default function SiteToDoPage() {

  const [taskList, setTaskList] = useState([])

  const taskTitleSubmitted = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    let titleIsUnique = true
    taskList.map(task => {
      if (task.taskTitle == data.taskTitle) { // we loop through each task and check the titles are unique or not
        titleIsUnique = false
      }
    }
    )
    if (data.taskTitle != "" && titleIsUnique) { // check stops muppets entering the same task twice
      setTaskList([...taskList, data]) // we deconstruct the tasklist array and add a new entry using the input form data
      console.log("updated task list")
    }
    console.log(taskList)
  }

  function deleteTask(title)
  {
    const filteredTasks = taskList.filter(t => t.taskTitle != title) 
    setTaskList(filteredTasks)
  }



  //// we generate task cards -
  return (
    <PageRunner>

      <Title className="text-3xl text-green-800 p-2" content="Things You Should Stop Ignoring!" />

      <SmallFormContainer onSubmit={taskTitleSubmitted}>
        <TextInput inputID="taskTitle" description="New Task Title: " placeholder="Buy Supplies..." />
        <TextInput inputID="taskDetails" description="New Task Details: " placeholder="compost, seeds, watering can..." />

        <Button type="submit" className="w-48 m-2">Create New Task</Button>


      </SmallFormContainer>

      <CardContainer>
        {taskList.map((task, index) => <Task key={index} task={task} onDelete={deleteTask} />)}
      </CardContainer>

    </PageRunner>
  )
}
