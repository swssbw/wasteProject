import axios from 'axios';
import React, {useState} from 'react'

const ItemSearch = () => {
  const [Value, setValue] = useState('');
  const [Result, setResult] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const axiosValue = async() => {
    const result = await axios.post('http://localhost:5000/api/search', {
      sword: Value
    });
    setResult(result.data);
  }

  const resultList =  Result.map(item => <li key={item._id}>{item.item} 은/는 {item.how}</li> ) 
  
  const onSubmit = (e) => {
    e.preventDefault();
    axiosValue();
    setValue("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="검색어를 입력하세요"
          value={Value.item}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
      <ul>{resultList}</ul>
    </div>
  )
}

export default ItemSearch
