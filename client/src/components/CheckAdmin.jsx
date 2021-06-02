import React from 'react'
import Admin from './Admin';

const CheckAdmin = ({ history }) => {

  const goHome = () => {
    history.push('/');
  };

  const promptvalue = prompt('암호를 입력하세요');
  if(promptvalue === '1234') {
    return <Admin />
  } else {
    alert('관리자만 접근 가능합니다.');
    goHome();
    return null;
  }

}

export default CheckAdmin
