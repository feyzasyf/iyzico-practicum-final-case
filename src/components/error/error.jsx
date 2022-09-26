import React from 'react';
import { useNavigate } from "react-router-dom";
import image from "../../assets/error.png";
import Button from '../../components/button/button';
import { ErrorPageWrapper } from './error.styles';


const Error = () => {
    const navigate= useNavigate();

    const handleNavigate=()=>{
     navigate("/");
    }
  
    return (
      <ErrorPageWrapper>
      <div>
        <img src={image} alt="" />     
        <Button onClick={handleNavigate}>Home</Button>
        </div>
      </ErrorPageWrapper>
    )
}

export default Error