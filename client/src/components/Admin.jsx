import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


const Admin = () => {
  // Contents = 전체 목록 불러오기
  const [Contents, setContents] = useState([]);

  // 아이템 추가
  const [Input, setInput] = useState({
    item: '',
    how: '',
    category: '',
  });

  const { item, how, category  } = Input;

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
    handleAll();
  }

  const axiosInput = async() => {
    await axios.post("/api/admin/add",{Input})
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

  // 아이템 추가 끝

  // 최근에 추가된 아이템부터 보여질 수 있도록 배열 순서를 거꾸로 출력함
  const reverse = [...Contents].reverse();

  const handleAll = async() => {
    //const result = await axios.get('http://localhost:5000/api/all');
    const result = await axios.get('/api/admin/all');
    setContents(result.data);
  }
  
  // 아이템 삭제 후 목록을 다시 불러옴
  const remove = async(id) => {
    await axios.delete(`/api/admin/delete/${id}`)
    .then(window.confirm('정말 삭제?'));
    handleAll();
  }


  const contentsList = (
    reverse.map(item => 
      <tr key={item._id}>
        {/* <td><Link to={"/update/"+item._id}>Edit</Link></td> */}
        {/* <td>{item.item}</td> */}
        <td><Link to={"/update/"+item._id}>{item.item}</Link></td>
        <td>{item.category}</td>
        <td>{item.how}</td>
        <td><button onClick={() => remove(item._id)}>X</button></td>
      </tr>
    ))


    const adminItemInsert = (
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
    )
 

  return (
    <div>
      <p><Link to="/">홈으로</Link></p>
      <h1>관리자 페이지</h1>
        <button onClick={handleAll}>전체 아이템 조회</button>
        {adminItemInsert}
      <div>
        <table>
        <thead>
          <tr>
            <th>품목명</th>
            <th>분류</th>
            <th>방법</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody id="test">
        {contentsList}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Admin

