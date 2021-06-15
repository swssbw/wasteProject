import React, { useState } from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Insert from './Insert';

const ItemInsert = () => {
  const [Visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className="ItemInsert">
      <Insert cb={show} type={"user"}><div className="msg">앗.. 결과가 없네요. 직접 추가해주시겠어요?</div></Insert>
      <Rodal visible={Visible} onClose={hide} width={300} height={300}>
        <div className="modalWrapper">
          <p>감사합니다😊</p>
          <div className="InsertModalDesc">입력해주신 내용은 <br /> 검토 후 반영하도록 하겠습니다.</div>
        </div>
      </Rodal>
    </div>
  );
}

export default ItemInsert
