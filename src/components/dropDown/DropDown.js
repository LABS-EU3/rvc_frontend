import React, { useState, useEffect } from "react";
import axios from "axios";

function DropDown(props) {
  const { listUrl, name, inputHandler } = props;

  const [itemList, setItemList] = useState([]);
  const [option, setOption] = useState("");

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(listUrl)
    .then(res => {
      setItemList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setIsFetching(false)
    })
  }, [listUrl]);

  
  const optionHandle = e => {
    setOption(e.target.value)
    inputHandler(e)
  }

  if(isFetching){
    return <h1>Loading</h1>
  }
  if (itemList) {
    return (
      <select name={name} value={option} onChange={optionHandle}>
        <option defaultValue disabled>Select a type of dish</option>
        {itemList.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    );
  }
}

export default DropDown;
