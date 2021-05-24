import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import SubPage from './SubPage';


const MainPage = () => {
  const [Contents, setContents] = useState([]);

  const handleAll = async() => {
    const result = await axios.get('http://localhost:5000/api/all');
    setContents(result.data);
  }
 
  const contentsList = Contents.map(item => <li key={item._id}>{item.item} 은/는 {item.how}</li>)

  return (
    <div>
      <h1>전체 쓰레기 목록</h1>
      <button onClick={handleAll}>불러오기</button>
      <ul>{contentsList}</ul>
    </div>
  )
}

export default MainPage
