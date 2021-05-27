import React, { useState } from 'react'
import axios from 'axios';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const ItemInsert = () => {
  const [Input, setInput] = useState({
    item: '',
    how: '',
    category: '',
  });

  const { item, how, category  } = Input;
  
  const [Visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  }

  const hide = () => {
    setVisible(false);
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    setInput({
      ...Input,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setInput({
      item: '',
      how: '',
      category: '',
    });
    axiosInput();
    show();
  }

  const axiosInput = async() => {
    await axios.post("/api/add",{Input})
  }

  const options = (
    <>
    <option value="">카테고리를 선택해주세요!</option>  
    <option value="가전제품">가전제품</option>  
    <option value="고철">고철</option>
    <option value="금속캔">금속캔</option>
    <option value="대형">대형</option>
    <option value="전문시설">전문시설</option>
    <option value="불연성 폐기물">불연성 폐기물</option>
    <option value="비닐">비닐</option>
    <option value="유리병">유리병</option>
    <option value="음식물">음식물</option>
    <option value="의류">의류</option>
    <option value="재질에 맞게 배출">재질에 맞게 배출</option>
    <option value="전용함">전용함</option>
    <option value="종량제">종량제</option>
    <option value="종이">종이</option>
    <option value="종이팩">종이팩</option>
    <option value="플라스틱">플라스틱</option>
    </>
  )

  return (
    <div className="ItemInsert">
      <div className="msg">앗.. 결과가 없네요. 직접 추가해주시겠어요? </div>
      <form onSubmit={onSubmit} className="Insertform">
        <input 
          placeholder="무엇을 버릴까요?"
          name="item"
          value={item}
          onChange={onChange}
          required
          autoComplete="off"
        /><br/>
        <input 
          placeholder="어떻게 버릴까요?"
          name="how"
          value={how}
          onChange={onChange}
          required
          autoComplete="off"
        /><br/>
        <select 
          name="category"
          value={category}
          onChange={onChange}
          required
          className="categorySelect"
        >
          {options}
        </select><br/>
        <button type="submit">추가</button>
      </form>
      <div>
        <Rodal visible={Visible} onClose={hide} width={300} height={300}>
          <div className="modalWrapper">
            <p>감사합니다😊</p>
            <div className="InsertModalDesc">입력해주신 내용은 <br/> 검토 후 반영하도록 하겠습니다.</div>
          </div>
        </Rodal>
      </div>
      
    </div>
    )
}

export default ItemInsert
