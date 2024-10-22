import React, { useState } from 'react'
import PageRunner from '../components/PageRunner'
import CardContainer from '../components/CardContainer'
import SmallFormContainer from '../components/SmallFormContainer'
import TextInput from '../components/TextInput'
import Title from '../components/Title'
import Button from '../components/Button'
import Card from '../components/Card'
import PriorityButtons from '../components/PriorityButtons'

export default function SiteToDoPage() {

  const [taskList,setTaskList] = useState([])

  const taskTitleSubmitted = (e) => {
    console.log(e)
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    let titleIsUnique = true
    taskList.map(task => { if(task.taskTitle == data.taskTitle){ // we loop through each task and check the titles are unique or not
      titleIsUnique=false}}
    )      
      if(data.taskTitle != "" && titleIsUnique) { // check stops muppets entering the same task twice
      setTaskList([...taskList,data]) // we deconstruct the tasklist array and add a new entry using the input form data
    }

  }
  const taskDelete = (taskToFilter) => {
    const filteredTaskList = taskList.filter((taskInList) => taskToFilter.taskTitle != taskInList.taskTitle)
    setTaskList(filteredTaskList)
    }

const testTaskList = (taskList) =>{ /// this function is execute when the test button is hit
  //we populate the fields with testdata by looking up the fields by their element id's or name in the case of the radio button
  // we set the values to match testData and then simulate the submit button being clicked on the form triggering the form submission event handler we have defined

  let testData =  
    {
    "taskTitle" : "test 1",
    "taskDetails" : "Details 1",
    "priority" : "P2",
  }
  let titleElement = document.getElementById("taskTitle");
  titleElement.value = testData.taskTitle;
  let detailsElement = document.getElementById("taskDetails");
  detailsElement.value = testData.taskDetails;
  const radioButtons = document.getElementsByName('priority');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].id === testData.priority) {
      radioButtons[i].checked = true; 
      break; 
    }
  }
  const submitButton = document.getElementById("taskSubmit")
  submitButton.click()
}
//we add a task in progress button - it can switch to green and back 
  const taskInProgress = (task) => {

    const updatedTasks = taskList.map((t) =>
      t.taskTitle === task.taskTitle
        ? { ...t, status: t.status === 'In Progress' ? 'Pending' : 'In Progress' }
        : t
    );
  
    setTaskList(updatedTasks);
  };

    
    

    //// we generate task cards -
  return (
    <PageRunner>

      <Title className = "text-green-800 p-2"content= "Things You Should Stop Ignoring!" />

      <SmallFormContainer id = "taskform" onSubmit={taskTitleSubmitted}>
        <TextInput inputID = "taskTitle"  description = "New Task Title: " placeholder = "Buy Supplies..." />
        <TextInput inputID = "taskDetails"  description = "New Task Details: " placeholder = "compost, seeds, watering can..." />
        <PriorityButtons />
        <Button id = "taskSubmit" variant = "primary"content={"Create New Task"} type = "submit"/>
      </SmallFormContainer>

      <CardContainer>
        {taskList.map((task,index) =>{
          return(
            <Card key = {index} id = {task.taskTitle} >
              <div className='flex flex-row justify-between items-center w-full text-center p-2' >        
                <Title content={task.taskTitle} /> 
                <Button  variant = "ghost" onClick={() =>{taskDelete(task)}} content={"DELETE"} />        
              </div>
              <div className='pt-2'>
                <Title variant='subTitle' content={task.taskDetails} />
               </div>
            </Card>
            
          )
        } )}
      </CardContainer>
        <Button variant='primary' content={"Run Tests"} onClick={() =>{testTaskList(taskList)}}/>
        <div>This button populates the task fields and submits it at priority 2</div>
  {taskList.map((task, index) => {
    return (
      <Card key={index} id={task.taskTitle}>
        <div className='flex flex-row justify-between items-center w-full text-center p-2'>
          <Title content={task.taskTitle} />
          <Button
            variant="ghost"
            onClick={() => taskInProgress(task)} 
            content={"IN PROGRESS"}
            style={{ color: task.status === 'In Progress' ? 'green' : 'black' }} 
          />
          <Button
            variant="ghost"
            onClick={() => taskDelete(task)} 
            content={"DELETE"}
          />
        </div>
        <div className='pt-2'>
          <Title variant='subTitle' content={task.taskDetails} />
        </div>
      </Card>
    );
  })}
</CardContainer>


    </PageRunner>
  )
}
