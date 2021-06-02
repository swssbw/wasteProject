import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Insert from './Insert';
import 'rodal/lib/rodal.css';
import { HomeOutlined, CloseCircleOutlined} from '@ant-design/icons';
import EditItem from './EditItem';

const Admin = () => {
  // allItems : 전체 목록
  const [ allItems, setAllItems] = useState([]);

  const [itemId, setItemId] = useState('');

  //최근에 추가된 아이템부터 보여질 수 있도록 배열 순서를 거꾸로 출력함
  const reverse = [...allItems].reverse();
  
  const handleAll = async() => {
    await axios.get('/api/admin/all').then(result => {setAllItems(result.data)});
  }

  // useEffect(() => {
  //   handleAll();
  // }, []);
  

  console.log(allItems);
  

  // 아이템 삭제 후 목록을 다시 불러옴
  const remove = async(id) => {
    if(window.confirm("정말 삭제하시겠습니까?") === true) {
      await axios.delete(`/api/admin/delete/${id}`)
      handleAll();
    }
  }

  // 인풋박스의 타입이 수정인지 추가인지 알려줌
  const [type, setType] = useState(true);

  const handleItemClick = (id) => {
    setType(false);
    setItemId(id);
    console.log(type, id);
  }
  
  const contentsList = (
    reverse.map(item => 
      <tr key={item._id}>
        <td onClick={() => handleItemClick(item._id)}>{item.item}</td>
        <td style={{ textAlign:"center" }}>{item.category}</td>
        <td>{item.how}</td>
        <td style={{ textAlign:"center" }}><CloseCircleOutlined onClick={() => remove(item._id)} /></td>
      </tr>
    ))

  return (
    <>
    <div className="admincontainer">
      <div className="adminTitle"> 
        <p className="home"><Link to="/" ><HomeOutlined /></Link></p>
        <span onClick={handleAll}>관리자 페이지</span>
      </div>
        <div className="gridContainer">
          <div className="col1">
            {
              type === true
              ? <Insert cb={handleAll} title={"추가하기"}></Insert>
              : <EditItem cb={handleAll} id={itemId} setType={setType} title={"수정하기"}></EditItem>
            }
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

