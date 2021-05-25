import React from 'react'
import './ItemSearchResult.scss'
const ItemSearchResult = ({ Result }) => {
  
    if(Result.length !== 0) {
      return (
        <div className="ItemSearchResult">
          <ul>
            {Result.map(item =>  <li key={item._id}><p className="ItemName">{item.item}{item.category}</p>{item.how}</li>)}
          </ul>
        </div>
      )
    } else {
      return null
    }

}

export default ItemSearchResult