import React from 'react'

const Template = ({children}) => {
  return (
    <div className="wrapper">
      <div className="template">
        <div className="app-title">분리수거 검색기</div>
        <div className="app-content">{children}</div>
      </div>
    </div>
  )
}

export default Template
