import { useState } from 'react'
import './App.css'
import AddNewTask from './components/AddNewTask'
import BadList from './components/BadList'
import EntryList from './components/EntryList'

// const defaultEntryLists = [
//   { taskName: "Reading", hours: 4 },
//   { taskName: "Walking", hours: 5 },
// ]

// clear form on submit
// delete task list
// transfer to bad list
// total hours count

const badLists = []
  // { taskName: "Dancing", hours: 2 }

function App() {
  const [entryLists, setEntyLists] = useState([]);
  const [badLists, setBadLists] = useState([]);

  const updateEntryLists  = (newTaskName, newTaskHours) => {
    const newTask = { taskName: newTaskName, hours: newTaskHours };

    setEntyLists([...entryLists, newTask])
  };

  const removeEntryList=(taskNameToRemove)=> {
    alert ("this is called from App -"+ taskNameToRemove);
    const filteredLists= entryLists.filter(
      (list)=> list.taskName != taskNameToRemove,
    );
    setEntyLists(filteredLists);
  };

  const transferBadList= (taskName) => {
    const badTask = entryLists.find(list => list.taskName === taskName);
    setBadLists ([...badLists, badTask]);
  }

  return (
    <>
      <h2>To Do List</h2>
      <AddNewTask onSubmit={updateEntryLists} />
      <EntryList 
      entryLists={entryLists}
      onTaskDelete={removeEntryList}
      onTransfer={transferBadList} />
      <BadList badLists={badLists} />
    </>
  )
}

export default App
