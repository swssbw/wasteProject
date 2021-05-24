import React from 'react'
import './ItemSearchResult.scss'
const ItemSearchResult = ({ Result }) => {
  
    if(Result.length !== 0) {
      return (
        <div className="ItemSearchResult">
          <div>검색결과</div>
          <ul>{ Result.map(item => <li key={item._id}>{item.item} 은/는 {item.how}</li> ) }</ul>
        </div>
      )
    } else {
      return null
    }
  

  
  
}

export default ItemSearchResult