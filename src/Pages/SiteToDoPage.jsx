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
 /// const [priority, setPriority] = useState(""); //Setting priority variable - MT No longer needed - simon

  const taskTitleSubmitted = (e) => {
    
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(e, " = event ")
    

    const data = Object.fromEntries(formData.entries())
    const checkedRadio = document.querySelector('input[name="priority"]:checked');
    data.priority = checkedRadio.id
    console.log(data, "= data for debugging")
    let titleIsUnique = true
    taskList.map(task => { if(task.taskTitle == data.taskTitle){ // we loop through each task and check the titles are unique or not
      titleIsUnique=false}}
    )      
      if(data.taskTitle != "" && titleIsUnique) { // check stops muppets entering the same task twice
  
        console.log("debug submitted priority value == ", data.priority) //= priority; // Add the selected priority directly to the form data - MT
      setTaskList([...taskList,data ]) // we deconstruct the tasklist array and add a new entry using the input form data
    }

  }

  //added complete button so it counts how many tasks we have done. There is also a function which counts how many tasks we have done. 
  const taskCompleted = (taskToUpdate) => {
    const updatedTasks = taskList.map((task) =>
      task.taskTitle === taskToUpdate.taskTitle
        ? { ...task, status: 'Completed' }
        : task
    );
    setTaskList(updatedTasks);
  };

  //apart from complete we can also delete tasks if we don't want them anymore 
  const taskDelete = (taskToDelete) => {
    const updatedTaskList = taskList.filter(task => task.taskTitle !== taskToDelete.taskTitle);
    setTaskList(updatedTaskList);
  };

const testTaskList = () =>{ /// this function is execute when the test button is hit
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
  console.log(radioButtons)
  for (let i = 0; i < radioButtons.length; i++) {
    console.log(radioButtons[i].id, " = radio button id, ",testData.priority,  " = testdata priority" )
    if (radioButtons[i].id === testData.priority) {
      radioButtons[i].click(); //// thisdoesnt work anymore because the priority button component relies on the react event handler onchange to register user input and update a state.
      radioButtons[i].onChange=true; 
      console.log("button checked")
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
//counts how many tasks we submitted
  const countCompletedTasks = () => {
    return taskList.filter(task => task.status === 'Completed').length;
  };

  const [taskDate, setTaskDate] = useState('');

    // Define a function that returns the background color based on priority
    const getBackgroundColor = (priority) => {
      switch (priority) {
        case 'P1': return 'red'; // High priority
        case 'P2': return 'yellow'; // Medium priority
        case 'P3': return 'green'; // Low priority
        default: return 'plantcolor'; // Default color
      }
    };

    //// we generate task cards -
return (
  <PageRunner>

    <Title className="text-green-800 p-2" content="Things You Should Stop Ignoring!" />

    <SmallFormContainer id="taskform" onSubmit={taskTitleSubmitted}>
      <TextInput inputID="taskTitle" description="New Task Title: " placeholder="Buy Supplies..." />
      <TextInput inputID="taskDetails" description="New Task Details: " placeholder="compost, seeds, watering can..." />
      {/*added the date field */}
      <div className="flex justify-between items-center w-full">
        <label htmlFor="taskDate" className="mr-4">New Task Date:</label>
        <input
          id="taskDate"
          type="date"
          className="w-1/2 p-0.5 border border-black text-left placeholder:text-gray-400"
          placeholder="dd/mm/yyyy"
          onChange={(e) => setTaskDate(e.target.value)}
        />
      </div>
      <br></br>
      <PriorityButtons  />
      <Button id="taskSubmit" variant="primary" content={"Create New Task"} type="submit" />
    </SmallFormContainer>

    <div className="p-4">
        <p>Completed Tasks: {countCompletedTasks()}</p>
    </div>

  {/* I've ordered the card container so it displays things hierarchically - status, title, description - one thing under another*/}   
    <CardContainer> 
      {taskList.map((task, index) => {
        return (
          <Card key={index} id={task.taskTitle} style={{ backgroundColor: getBackgroundColor(task.priority) }}>
            <div className='flex flex-col w-full p-2'>
              <div className='flex flex-row justify-between items-center'>
                <Button
                  variant="ghost"
                  onClick={() => taskInProgress(task)}
                  content={"IN PROGRESS"}
                  style={{ color: task.status === 'In Progress' ? 'green' : 'black' }} 
                />
                <Button
                  variant="ghost"
                  onClick={() => taskCompleted(task)} 
                  content={"COMPLETED"}
                  style={{ color: task.status === 'Completed' ? 'green' : 'black' }} 
                />
                <Button
                  variant="ghost"
                  onClick={() => taskDelete(task)} 
                  content={"DELETE"}
                  style={{ color: 'orange' }} 
                />
              </div>

              <div className='pt-2'>
                <Title content={task.taskTitle} />
              </div>

              <div className='pt-2'>
                <Title variant='subTitle' content={task.taskDetails} />
              </div>
              <div className="pt-2">
                  <Title className='font-light text-sm' variant="subTitle" content={`Priority: ${task.priority}` } /> {/* Display Priority in Card Container- MT*/}
              </div>

              <div className="pt-2">
                  <Title className='font-light text-sm' variant="subTitle" content={`Task Date: ${taskDate}` } /> {/* Display the date*/}
              </div>


            </div>            
          </Card>
        );
      })}
    </CardContainer>

    <Button variant='primary' content={"Run Tests"} onClick={() => { testTaskList(taskList) }} />
    <div>This button populates the task fields and submits it at priority 2</div>

  </PageRunner>
)}
