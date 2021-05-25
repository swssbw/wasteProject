import React from 'react'
import './InsertModal.scss';

const InsertModal = ({ InsertModalOn, handleModalOff }) => {

  if(!InsertModalOn) return null;

  return (

    <div className="dim" onClick={handleModalOff}>
      <div className="overlay" onClick={(e)=> e.stopPropagation()}>
        <h1>감사합니다!</h1>
        <div className="InsertModalDesc">입력해주신 내용은 <br/> 검토 후 반영하도록 하겠습니다.</div>
      </div>
    </div>
  )
}

export default InsertModal
