import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const MainPage = () => {

  const [Visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className="main">
      <button onClick={show}> 분리배출 전 꼭 읽어주세요! </button>
      <Rodal visible={Visible} onClose={hide} width={400} height={400}>
        <div className="modalWrapper">
          <div className="modalTitle">분리배출 핵심 4원칙을 아시나요?</div>
          <div className="modalDescWrapper">
            <p className="modalDesc">✅ 비운다 </p>
            용기 안에 담겨있는 내용물은 깨끗이 비우고 배출한다. <br />
            <p className="modalDesc">✅ 헹군다 </p>
            재활용품에 묻어있는 이물질, 음식물 등은 닦거나 한 번 헹궈서 배출한다. <br />
            <p className="modalDesc">✅ 분리한다 </p>
            라벨 등의 다른 재질 부분은 제거하여 배출한다. <br />
            <p className="modalDesc">✅ 섞지 않는다 </p>
            종류별, 재질별로 구분하여 분리수거함으로 배출한다.<br />
          </div>
        </div>
      </Rodal>
    </div>
  )
}

export default MainPage
