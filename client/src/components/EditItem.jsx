import axios from 'axios';
import React, { useState, useEffect } from 'react'

const EditItem = ({ cb, id, setType, title }) => {

  const [Detail, setDetail] = useState({
    item: "",
    how: "",
    category: ""
  });

  const {item, how, category} = Detail;

  // //useEffect hook에서 async/await을 쓰려면 훅 안에서 함수를 만들고 호출하든가,
  // // hook밖에서 만들고 hook안에서 호출하던가!
  useEffect(() => {
    async function axiosDetail() {
      const result = await axios.get(`/api/admin/update/${id}`);
      setDetail({
        item: result.data[0].item,
        how: result.data[0].how,
        category: result.data[0].category
      })
    }
    axiosDetail();
  }, [id])

  const onChange = (e) => {
    const {name, value} = e.target;
    setDetail({
      ...Detail,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axiosInput();
    cb();
    setType(true);
  }

  const axiosInput = async() => {
    await axios.put(`/api/admin/update/${id}`,Detail);
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
    <>
      <h2 className="formTitle">{title}</h2>
      <div className="ItemInsert">
        <form onSubmit={onSubmit} className="Insertform" >
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
            <button type="submit">수정</button>
          </form>
      </div>
    </>
  )
}

export default EditItem
                               