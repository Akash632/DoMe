import "./App.css";
import Task from "./components/Tasks/Task";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import User from "./components/User/User";
import Error from "./components/Errors/Error";
function App() {
  let auth = localStorage.getItem('user');
  return (
    <div className="todo-main-container">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Task/>}/>
        <Route exact path="/login" element={auth?<Navigate to="/"/> :<User/>}/>
        <Route exact path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
