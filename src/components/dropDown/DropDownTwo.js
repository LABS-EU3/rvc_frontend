import React, { useState, useEffect } from "react";
import styles from 'styled-components';
import axios from "axios";

const Select = styles.select`
 height: 40px;
 margin-bottom: 1rem;
 background-color: white;
`

function DropDown(props) {
  const { listUrl, name, name2, inputHandler } = props;
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
    return <h4>...</h4>
  }
  if (itemList) {
    return (
      <Select name={name} value={option} onChange={optionHandle}>
        <option>{`Select ${name2}`}</option>
        {itemList.map(option => (
          <option required key={option.id} value={option.id}>{option.name === "no unit; REPLACE W/ EMPTY STRING" ? "No Unit" : option.name}</option>
        ))}
      </Select>
    );
  }
}

export default DropDown;
