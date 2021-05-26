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
      {/* <div className="Load-all">
        <button onClick={handleModalOn}>전체보기</button>
          <SubPage ModalOn={ModalOn} Contents={Contents} handleModalOff={handleModalOff} />
      </div> */}


      <div className="Load-all">
        <button onClick={show}> ** 쓰레기 버리기 전 필독 ** </button>

        <Rodal visible={Visible} onClose={hide} width={400} height={400}>
          <div className="modalWrapper">
          <div className="modalTitle">분리배출 핵심 4원칙을 아시나요?</div>
          <div className="modalDescWrapper">
            <p className="modalDesc">✅ 비운다 </p>
            용기 안에 담겨있는 내용물은 깨끗이 비우고 배출한다. <br/>
            <p className="modalDesc">✅ 헹군다 </p>
            재활용품에 묻어있는 이물질, 음식물 등은 닦거나 한 번 헹궈서 배출한다. <br/>
            <p className="modalDesc">✅ 분리한다 </p>
            라벨 등의 다른 재질 부분은 제거하여 배출한다. <br/>
            <p className="modalDesc">✅ 섞지 않는다 </p>
            종류별, 재질별로 구분하여 분리수거함으로 배출한다.<br/>
          </div>
          </div>
        </Rodal>

      </div>

    </>
  )
}

export default MainPage
