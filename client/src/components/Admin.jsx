import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


const Admin = () => {
  // Contents = 전체 목록 불러오기
  const [Contents, setContents] = useState([]);

  const handleAll = async() => {
    const result = await axios.get('http://localhost:5000/api/all');
    setContents(result.data);
  }
  
  const remove = async(id) => {
    // await axios({
    //   url: '/api/admin/:id',
    //   method: 'delete',
    // })
    await axios.delete('/api/admin/'+id, id);
  }

  const contentsList = (
    Contents.map(item => 
    // <li key={item._id}>{item.item} || {item.how}</li>
    // <li key={item._id}>
    //     <p>{item.item}</p> 
    //     <p>{item.how}</p>
    // </li>
      <tr key={item._id}>
     
        <td><Link to={"/edit/"+item._id}>Edit</Link></td>
        <td>{item.item}</td>
        <td>{item.category}</td>
        <td>{item.how}</td>
        <td><button onClick={()=>{remove(item._id)}}>삭제</button></td>
      </tr>
    ))
 
  
  return (
    <div>
      <p><Link to="/">홈으로</Link></p>
      <h1>관리자 페이지</h1>
        <button onClick={handleAll}>전체 아이템 조회</button>
      <div>
        <table>
        <thead>
          <tr>
            <th>수정</th>
            <th>품목명</th>
            <th>분류</th>
            <th>방법</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody id="test">
        {contentsList}
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default Admin
