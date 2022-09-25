import React from 'react';
import { useNavigate } from "react-router-dom";
import image from "../../assets/404.png";
import Button from '../../components/button/button';
import { ErrorPageWrapper } from './errorPage.styles';

const ErrorPage = () => {
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

export default ErrorPage
