import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle]=useState("");
  const [desc, setDesc]=useState("");
  const [mainTask, setMainTask] = useState([])
  
  const SubmitHandler = (e)=>{
    e.preventDefault();
    // console.log(title);
    if(title){
      setMainTask([...mainTask,{title, desc}]);
    }
    setTitle('');
    setDesc('');
    document.querySelector(".title-box").focus();
  };

  const deleteHandeler=(i,theTask)=>{
    let copytask=[...theTask]
    // console.log(i);
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2 className='text-xl'>No Tasks Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return <li className='task-list list-none flex justify-between border items-center p-5' key={i}>
        <div className='tasks flex justify-between item-center items-center w-3/4'>
        <h4 className='text-2xl font-semibold'>{t.title}</h4>
        <h6 className='text-l font-semibold'>{t.desc}</h6>
      </div>

      <button className='text-red-600 text-2xl px-2 py-2 rounded font-bold'onClick={()=>{
        deleteHandeler(i,mainTask)
      }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"/><path d="M9 10h2v8H9zm4 0h2v8h-2z"/></svg></button>
      </li>
    })
  }

  return (
    <div className='max-w-5xl m-auto bg-slate-200'>
      <h1 className=' p-5 text-center font-bold text-4xl bg-slate-200'>My To-Do App</h1>
      <div className='flex align-middle'>
        <form onSubmit={SubmitHandler} className='form' >
          <input className='title-box' type="text" placeholder='Enter Task' value={title} onChange={(e)=>{setTitle(e.target.value)}} />

          <input className='desc-box' type="text" placeholder='Description' value={desc} onChange={(e)=>{setDesc(e.target.value)}} />

          <button className='button text-slate-200'>Add task</button>
        </form>
      </div>
      <hr className='h-1 bg-gray-400'/>
      <div className='p-8 bg-slate-200'>
      <h2 className='text-center text-2xl font-bold underline text-orange-600 '>Your Pending Tasks</h2>
        {renderTask}
      </div>

    </div>
  )
}

export default App
 