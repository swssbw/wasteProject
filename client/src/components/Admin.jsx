import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Insert from './Insert';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import EditItem from "./EditItem";
import Template from './Template';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  // Contents : 전체 목록
  const [Contents, setContents] = useState([]);

  //최근에 추가된 아이템부터 보여질 수 있도록 배열 순서를 거꾸로 출력함
  const reverse = [...Contents].reverse();
  
  const handleAll = async() => {
    axios.get('/api/admin/all').then(result => {setContents(result.data)});
  }

  useEffect(() => {
    handleAll();
  }, [])
  

  // 아이템 삭제 후 목록을 다시 불러옴
  const remove = async(id) => {
    if(window.confirm("정말 삭제할거야?") == true) {
      await axios.delete(`/api/admin/delete/${id}`)
      handleAll();
    }
  }

  const contentsList = (
    reverse.map(item => 
      <tr key={item._id}>
        <td><Link to={"/update/"+item._id}>{item.item}</Link></td>
        <td style={{ textAlign:"center" }}>{item.category}</td>
        <td>{item.how}</td>
        <td style={{ textAlign:"center" }}><button onClick={() => remove(item._id)}>X</button></td>
      </tr>
    ))

  return (
    <>
    <p><Link to="/" >홈으로</Link></p>
    <div className="admincontainer">
      <h1 className="adminTitle">관리자 페이지</h1>

        <div className="gridContainer">
          <div className="col1">
            <Insert cb={handleAll}></Insert>
          </div>

          <div className="col2">
            <div className="loadAll">
              <table>
                <thead>
                  <tr>
                    <th style={{width:"50px"}}>품목명</th>
                    <th style={{width:"70px"}}>분류</th>
                    <th style={{width:"200px"}}>방법</th>
                    <th style={{width:"10px"}}></th>
                  </tr>
                </thead>
                <tbody>
                  {contentsList}
                </tbody>
              </table>
            </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default Admin

