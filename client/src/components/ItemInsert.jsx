import React, {useState} from 'react'
import axios from 'axios';

const ItemInsert = () => {
  const [Input, setInput] = useState({
    item: '',
    how: '',
  });

  const onChange = (e) => {
    setInput({
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setInput({
      item: '',
      how: '',
    });
    console.log(Input);
  }

  // const axiosInput = async() => {
  //   const result = await axios.post("",{

  //   })
  // }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="무엇을 버릴까요?"
          name="item"
          value={Input.item}
          onChange={onChange}
        />
        <input 
          placeholder="어떻게 버릴까요?"
          name="how"
          value={Input.how}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}

export default ItemInsert
