import {useState,useEffect} from "react";
import Add from "../AddTodo/Add";
import axios from 'axios';
import './Task.css';
import { useNavigate } from "react-router-dom";
import { toast} from 'react-toastify';



function Task() {
    const [data,setData] = useState();
    const [task,setTask] = useState("");
    const [id,setId]=useState("");
    const [update,setUpdate]=useState(false);
    const navigate = useNavigate();
    let userObj = JSON.parse(localStorage.getItem('user'));
    const addTask = async ()=>{
      if(userObj){
        const res = await axios.post(`https://do-me.onrender.com/api/v1/tasks/add-task/${userObj.id}`,{
        task
      })
      if(res.data.success){
        getData();
        setTask('');
        toast.success(res.data.message,{
          theme:'dark',
          position:'bottom-right',
          autoClose:3000
        })
      }
      else if(res.data.success===false){
        toast.warning(res.data.message,{
          theme:'dark',
          position:'bottom-right',
          autoClose:3000
        })
      }
      }else{
        navigate('/login')
      }
    }
  
    const getData = async () =>{
      const res = await axios.get(`https://do-me.onrender.com/api/v1/tasks/get-tasks/${userObj.id}`);
      if(res.data.success){
        setData(res.data.data);
        toast.success(res.data.message,{
          theme:'dark',
          position:'bottom-right',
          autoClose:3000
        })
      }
    }
    useEffect( ()=>{
      if(userObj){
        getData();
      }
    },[userObj])
  
    const deleteTask = async (postId) =>{
      const res = await axios.delete(`https://do-me.onrender.com/api/v1/tasks/delete-task/${postId}`);
      if(res.data.success){
        toast.success(res.data.message,{
          theme:'dark',
          position:'bottom-right',
          autoClose:3000
        })
        getData();
      }
    }
  
    const handleUpdate=(itemId,text)=>{
      setId(itemId);
      setTask(text);
      setUpdate(true);
    }
  
    const updateTask = async () =>{
      const res=await axios.put(`https://do-me.onrender.com/api/v1/tasks/update-task/${id}`,{
        task
      })
      if(res.data.success){
        toast.success(res.data.message,{
          theme:'dark',
          position:'bottom-right',
          autoClose:3000
        })
        getData();
        setId('');
        setTask('');
        setUpdate(false);
      }
    }
  return (
    <>
    <div>
      <Add value={task} setValue={setTask} handleAdd={addTask} update={update} handleUpdate={updateTask}/>
    </div>
    <div className="task-container">
      {data && data.map((value)=>(
         <div className="task-main-container" key={value._id}>
         <div className="todo-text-container">
           <p>{value.task}</p>
         </div>
         <div className="todo-btn-container">
           <button  className="update-btn" onClick={()=>handleUpdate(value._id,value.task)}>Edit</button>
           <button className="delete-btn" onClick={()=>deleteTask(value._id)}>Delete</button>
         </div>
       </div>
      ))}
    </div>
    </>
  );
}

export default Task;
