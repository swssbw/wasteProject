import React from 'react'

const SearchHistory = ({ keywords, onRemoveKeyword, onClearKeywords }) => {
  
  if(keywords.length === 0) {
    return <div className="shdesc"> 최근 검색한 기록이 없습니다. </div>
  }

  return (
    <div class="shcontainer">
      <div className="shwrapper">
        <ul>
          {keywords.map(({id, Sword}) => {
            return (
              <li key={id}>
                <span>{Sword}</span>&nbsp;<small className="remove"onClick={()=>{onRemoveKeyword(id)}}>X</small>
              </li>
            )
          })}
        </ul>
      </div>

      <span className="remove" onClick={onClearKeywords}>&nbsp;X</span>

    </div>
  )
}

export default SearchHistory
