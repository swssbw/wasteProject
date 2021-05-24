import React from 'react'
import './ItemSearchResult.scss'
const ItemSearchResult = ({ Result }) => {
  return (
    <div className="ItemSearchResult">
      <div>검색결과</div>
      <ul>{ Result.map(item => <li key={item._id}>{item.item} 은/는 {item.how}</li> ) }</ul>
    </div>
  )
}

export default ItemSearchResult