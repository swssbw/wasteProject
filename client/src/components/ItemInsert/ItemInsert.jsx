import React, {useState} from 'react'
import axios from 'axios';
import './ItemInsert.scss';
import InsertModal from '../InsertModal/InsertModal';

const ItemInsert = () => {
  const [Input, setInput] = useState({
    item: '',
    how: '',
    category: '',
  });

  
  const { item, how, category  } = Input;
  
  const [InsertModalOn, setInsertModalOn] = useState(false);

  const handleModalOn = (e) => {
    setInsertModalOn(true);
  }

  const handleModalOff = (e) => {
    setInsertModalOn(false);
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
    handleModalOn();
  }

  const axiosInput = async() => {
    await axios.post("http://localhost:5000/api/add",{Input})
  }

  const options = (
    <>
    <option value="">카테고리를 선택해주세요!</option>  
    <option value="대형">대형</option>  
    <option value="종량제">종량제</option>
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
          {/* <option value="">카테고리를 선택해주세요!</option>  
          <option value="대형">대형</option>   */}
          {options}
        </select><br/>
        <button type="submit">추가</button>
      </form>
      <InsertModal InsertModalOn={InsertModalOn} handleModalOff={handleModalOff}></InsertModal>

    </div>
    )
}

export default ItemInsert
