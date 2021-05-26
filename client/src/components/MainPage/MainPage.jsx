import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import './MainPage.scss'
import SubPage from '../subPage/SubPage';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const MainPage = () => {
  const [Contents, setContents] = useState([]);
  const [ModalOn, setModalOn] = useState(false);
  const [Visible, setVisible] = useState(false);

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

  const show = (e) => {
    setVisible(true);
  }

  const hide = (e) => {
    setVisible(false);
  }


  return (
    <>
      <div className="Load-all">
        <button onClick={handleModalOn}>전체보기</button>
          <SubPage ModalOn={ModalOn} Contents={Contents} handleModalOff={handleModalOff} />
      </div>


      <div className="Load-all">
        <button onClick={show}>분류 안내</button>

        <Rodal visible={Visible} onClose={hide} width={500} height={500}>
          <div>품목별 분류 안내</div>
          <div>
            ◾ 종이류 : 물기에 젖지 않게 묶거나 박스류에 담아서 배출 <br/>
            ◾ 종이팩류 : 내용물을 비우고 물로 헹군 후 압착하여 배출 <br/>
            ◾ 캔·고철류 : 내용물을 비우고 배출, 플라스틱 뚜껑은 분리 <br/>
            ◾ 유리병류 : 병뚜껑을 제거하고 내용물을 비운 후 제출 <br/>
            ◾ 플라스틱류 : 다른 재질로 된 뚜껑은 제거 후 내용물을 비우고 배출 <br/>
            
          </div>
        </Rodal>

      </div>

    </>
  )
}

export default MainPage
