import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import './MainPage.scss'
import SubPage from '../subPage/SubPage';

const MainPage = () => {
  const [Contents, setContents] = useState([]);
  const [ModalOn, setModalOn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/all')
    .then(response => {
      setContents(response.data);
    })
  }, [])

  const handleModalOn = (e) => {
    setModalOn(true);
  }

  const handleModalOff = (e) => {
    setModalOn(false);
  }


  return (
    <div className="Load-all">
      <button onClick={handleModalOn}>ALL</button>
        <SubPage ModalOn={ModalOn} Contents={Contents} handleModalOff={handleModalOff} />
    </div>
  )
}

export default MainPage
