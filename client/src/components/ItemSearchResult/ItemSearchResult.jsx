import React from 'react'
import './ItemSearchResult.scss'
const ItemSearchResult = ({ Result }) => {
  
    if(Result.length !== 0) {
      return (
        <div className="ItemSearchResult">
          <div className="ItemSearchResultTitle">검색결과</div> 
          <ul>{ Result.map(item =>  <li key={item._id}><p className="ItemName">{item.item}</p>{item.how}</li> ) }</ul>
        </div>
      )
    } else {
      return null
    }

}

export default ItemSearchResult