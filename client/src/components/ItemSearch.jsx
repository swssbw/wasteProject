import axios from 'axios';
import React, { useState , useCallback } from 'react'
import ItemSearchResult from './ItemSearchResult';
import ItemInsert from './ItemInsert';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from '@fortawesome/fontawesome-svg-core';

const ItemSearch = () => {

  // 검색어
  const [Sword, setSword] = useState('');

  // 검색 결과
  const [Result, setResult] = useState(['']);

  const onChange = (e) => {
    setSword(e.target.value);
  }

  const axiosValue = async() => {
    const result = await axios.post('/api/search', {
      sword: Sword
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
          value={Sword}
          onChange={onChange}
          required
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
