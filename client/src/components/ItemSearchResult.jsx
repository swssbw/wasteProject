import React from 'react'

const ItemSearchResult = ({ Result }) => {
  
    if(Result.length !== 0) {
      return (
        <div className="ItemSearchResult">
          <ul>
            {Result.map((item, _id) => 
              <li key={_id} className="ItemList"> 
                <p className="ItemName">{item.item} </p> 
                <p className="ItemCategory">{item.category}</p> 
                <span className="ItemCaution">{item.caution}</span> 
                <span className="ItemHow">{item.how}</span>
              </li>
              )}
          </ul>
        </div>
      )
    } else {
      return null
    }

}

export default ItemSearchResult