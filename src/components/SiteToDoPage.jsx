import React, { useState } from 'react'
import PageRunner from './PageRunner'
import CardContainer from './CardContainer'
import SmallFormContainer from './SmallFormContainer'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import Title from './Title'
import SubTitle from './SubTitle'

export default function SiteToDoPage() {

  const [taskList,setTaskList] = useState([])

  const taskTitleSubmitted = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    let isUnique = true
    taskList.map(task => { if(task.taskTitle == data.taskTitle){
      isUnique=false}})      
  
      if(data.taskTitle != "" && isUnique) {
      setTaskList([...taskList,data])//form data object using values passed as inputID as keys
      console.log("updated task list")
    }
    console.log(taskList)
  }
  const taskDone = (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == "P"){
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
        <p className='text-right font-extrabold text-xs text-gray-500'>DELETE</p>
        
      </div>
      <div className='pt-2'>
        <SubTitle content={data.taskDetails} />
      </div>
      
    </div>)
    
  })

    //// lets return taskCards - each task card contains a Task title that is stored in a coloured header
    /// the task card has a body - the body contains subtasks
    //
  return (
    <PageRunner>
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
