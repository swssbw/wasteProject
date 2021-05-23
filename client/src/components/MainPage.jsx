import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import SubPage from './SubPage';


const MainPage = () => {
  const [Contents, setContents] = useState([]);

  const handleAll = async() => {
    const result = await axios.get('http://localhost:5000/api/all');
    console.log(result.data);
    setContents(result.data);
  }
  
  
  return (
    <div>
      <h1>전체 쓰레기 목록</h1>
      <button onClick={handleAll}>불러오기</button>
      <SubPage data={Contents}></SubPage>
    </div>
  )
}

export default MainPage
