import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './MainPage.scss'

const MainPage = () => {
  const [Contents, setContents] = useState([]);

  const handleAll = async() => {
    const result = await axios.get('http://localhost:5000/api/all');
    setContents(result.data);
  }
 
  const contentsList = Contents.map(item => <li key={item._id}>{item.item} 은/는 {item.how}</li>)

  return (
    <div className="Load-all">
      <button onClick={handleAll}>ALL</button>
      <ul>{contentsList}</ul>
    </div>
  )
}

export default MainPage
