import React from 'react'
import './Template.scss';

const Template = ({children}) => {
  return (
    <div className="template">
      <div className="app-title">분리수거 검색기</div>
      <div className="app-content">{children}</div>
    </div>
  )
}

export default Template
