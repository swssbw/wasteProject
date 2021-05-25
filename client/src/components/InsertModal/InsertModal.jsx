import React from 'react'
import './InsertModal.scss';

const InsertModal = ({ InsertModalOn, handleModalOff }) => {

  if(!InsertModalOn) return null;

  return (

    <div className="dim" onClick={handleModalOff}>
      <div className="overlay" onClick={(e)=> e.stopPropagation()}>
        <h1>감사합니다!</h1>
      </div>
    </div>
  )
}

export default InsertModal
