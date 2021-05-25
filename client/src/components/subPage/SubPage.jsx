import React from 'react'
import './Subpage.scss';

const SubPage = ({ Contents, ModalOn, handleModalOff }) => {

  if(!ModalOn) return null;

  return (

    <div className="dim" onClick={handleModalOff}>
      <div className="all_overlay" onClick={(e)=> e.stopPropagation()}>
        {
          Contents.map((item, _id) => <li key={_id}>{item.item}</li>)
        }
      </div>
    </div>
  )
}

export default SubPage
