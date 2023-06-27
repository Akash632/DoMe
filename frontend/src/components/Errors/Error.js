import React from 'react';
import error from '../../assets/error.png';
import './Error.css';
import { useNavigate } from 'react-router-dom';

function Error() {

  const navigate = useNavigate();
  return (
    <div className='error-image-container'>
      <img src={error}/>
      <button onClick={()=>navigate("/")}>Go back</button>
    </div>
  );
}

export default Error;
