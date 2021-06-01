import React from 'react'

const SearchHistory = ({ keywords, onRemoveKeyword, onClearKeywords }) => {
  
  if(keywords.length === 0) {
    return <div> 최근 검색한 기록이 없습니다. </div>
  }

  return (
    <div>
      <p>최근 검색어 <span onClick={onClearKeywords}>전체삭제</span> </p>
      <ul>
        {keywords.map(({id, Sword}) => {
          return (
            <li key={id}>
              <span>{Sword}</span>&nbsp;<span onClick={()=>{onRemoveKeyword(id)}}>삭제</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SearchHistory
