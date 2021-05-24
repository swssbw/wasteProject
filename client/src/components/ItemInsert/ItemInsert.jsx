import React, {useState} from 'react'
import axios from 'axios';

const ItemInsert = () => {
  const [Input, setInput] = useState({
    item: '',
    how: '',
  });

  const { item, how  } = Input;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInput({
      ...Input,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setInput({
      item: '',
      how: '',
    });
    console.log(Input)
    // axiosInput();
  }

  const axiosInput = async() => {
    const result = await axios.post("http://localhost:5000/api/add",{
        Input
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="무엇을 버릴까요?"
          name="item"
          value={item}
          onChange={onChange}
        />
        <input 
          placeholder="어떻게 버릴까요?"
          name="how"
          value={how}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}

export default ItemInsert
