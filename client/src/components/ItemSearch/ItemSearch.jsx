import axios from 'axios';
import React, {useState} from 'react'
import ItemSearchResult from '../ItemSearchResult/ItemSearchResult';
import './ItemSearch.scss'


const ItemSearch = () => {
  const [Value, setValue] = useState('');
  const [Result, setResult] = useState([]);
  console.log(Result);
  
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const axiosValue = async() => {
    const result = await axios.post('http://localhost:5000/api/search', {
      sword: Value
    });
    setResult(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axiosValue();
  }

  return (
    <div>
      <div className="desc">단, 지자체별로 배출방법에 대한 차이가 있을 수 있으니 참고로만 사용해주세요.</div>
      <form onSubmit={onSubmit} className="ItemSearch">
        <input 
          placeholder="검색어를 입력하세요"
          value={Value.item}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
        <ItemSearchResult Result={Result}></ItemSearchResult> 
    </div>
    
  )
}

export default ItemSearch
