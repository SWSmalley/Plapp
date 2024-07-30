import React, { useState } from 'react'
import PageRunner from '../components/PageRunner'
import CardContainer from '../components/CardContainer'
import SmallFormContainer from '../components/SmallFormContainer'
import TextInput from '../components/TextInput'
import SubmitButton from '../components/SubmitButton'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import DeleteButton from '../components/DeleteButton'

export default function SiteToDoPage() {

  const [taskList,setTaskList] = useState([])

  const taskTitleSubmitted = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    let titleIsUnique = true
    taskList.map(task => { if(task.taskTitle == data.taskTitle){ // we loop through each task and check the titles are unique or not
      titleIsUnique=false}}
    )      
      if(data.taskTitle != "" && titleIsUnique) { // check stops muppets entering the same task twice
      setTaskList([...taskList,data]) // we deconstruct the tasklist array and add a new entry using the input form data
      console.log("updated task list")
    }
    console.log(taskList)
  }
  const taskDone = (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == "BUTTON"){
    const filteredTaskList = taskList.filter(data => data.taskTitle != e.currentTarget.id)
    console.log(e.currentTarget, "= deletion key")
    setTaskList(filteredTaskList)
    }

  }

  const taskcards = taskList.map((data,index) => {
    return(
    <div key = {index} id = {data.taskTitle} onClick={taskDone} className="flex flex-col w-64 h-36 bg-plantcolor rounded-lg items-start p-5">
      <div className='flex flex-row justify-between items-center w-full text-center'>
        
        <Title content={data.taskTitle} /> 
        <DeleteButton deleteCall = {taskDone}/>
        
      </div>
      <div className='pt-2'>
        <SubTitle content={data.taskDetails} />
      </div>
      
    </div>)
    
  })

    //// we generate task cards -
  return (
    <PageRunner>

      <Title className = "text-3xl text-green-800 p-2"content= "Things You Should Stop Ignoring!" />

      <SmallFormContainer onSubmit={taskTitleSubmitted}>
        <TextInput inputID = "taskTitle" name description = "New Task Title: " placeholder = "Buy Supplies..." />
        <TextInput inputID = "taskDetails" name description = "New Task Details: " placeholder = "compost, seeds, watering can..." />
        <SubmitButton buttonText={"Create New Task"} className='text-white bg-green-800 px-3 font-extrabold w-48 text-center p-1 m-2'/>
      </SmallFormContainer>

      <CardContainer>
      {taskcards}
      </CardContainer>

    </PageRunner>
  )
}
