import axios from 'axios';
import React, { useState , useCallback } from 'react'
import ItemSearchResult from './ItemSearchResult';
import ItemInsert from './ItemInsert';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../scss/main.scss';

const ItemSearch = () => {
  const [Value, setValue] = useState('');
  const [Result, setResult] = useState(['']);
  
  const onChange = useCallback (e => {
    setValue(e.target.value);
  },[])

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
        <button type="submit">
        <FontAwesomeIcon icon={faSearch} className="search" />
        </button>
      </form>

      {
        Result.length !== 0
        ? <ItemSearchResult Result={Result} />
        : <ItemInsert />
      }

    
    </div>
  )

}

export default ItemSearch
