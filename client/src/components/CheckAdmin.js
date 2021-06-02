import React from 'react'
import Admin from './Admin';

const CheckAdmin = ({ history }) => {
  console.log(process.env.REACT_APP_ADMINPASSWORD);
  const goHome = () => {
    history.push('/');
  };

  const promptvalue = prompt('암호를 입력하세요');
  if(promptvalue == process.env.REACT_APP_ADMINPASSWORD ) {
    return <Admin />
  } else {
    alert('관리자만 접근 가능합니다.');
    goHome();
    return null;
  }

}

export default CheckAdmin
