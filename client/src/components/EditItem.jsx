import axios from 'axios';
import React, { useState, useEffect } from 'react'

const EditItem = ( { match } ) => {

  // const [Detail, setDetail] = useState({
  //   item: "",
  //   how: "",
  //   category: ""
  // });
  // const {item, how, category} = Detail;

  // const { id } = match.params;

  // console.log(match.params.id);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/api/admin/update/${id}`)
  //   .then(result => {setDetail({
  //     item: result.data.item,
  //     how: result.data.how,
  //     category: result.data.category
  //   })});
  // }, [])

  // const onChange = (e) => {
  //   const {name, value} = e.target;
  //   setDetail({
  //     ...Detail,
  //     [name]: value
  //   });
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setDetail({
  //     item: '',
  //     how: '',
  //     category: '',
  //   });
  //   axiosInput();
  // }

  // const axiosInput = async() => {
  //   await axios.put("/update/:id",{Detail})
  // }

  // const options = (
  //   <>
  //   <option value="">카테고리를 선택해주세요!</option>  
  //   <option value="가전제품">가전제품</option>  
  //   <option value="고철">고철</option>
  //   <option value="금속캔">금속캔</option>
  //   <option value="대형">대형</option>
  //   <option value="전문시설">전문시설</option>
  //   <option value="불연성 폐기물">불연성 폐기물</option>
  //   <option value="비닐">비닐</option>
  //   <option value="유리병">유리병</option>
  //   <option value="음식물">음식물</option>
  //   <option value="의류">의류</option>
  //   <option value="재질에 맞게 배출">재질에 맞게 배출</option>
  //   <option value="전용함">전용함</option>
  //   <option value="종량제">종량제</option>
  //   <option value="종이">종이</option>
  //   <option value="종이팩">종이팩</option>
  //   <option value="플라스틱">플라스틱</option>
  //   </>
  // )


  return (
    <>
      <h1>아이템 수정하기</h1>
      {/* <form>
      <form onSubmit={onSubmit} >
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
      </form> */}
    </>
  )
}

export default EditItem
                               