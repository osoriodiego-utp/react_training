import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllElements } from "./lists/actions";

function Example() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.myList.all);
  console.log("storeConfig/List: ", list)

  useEffect(() => {
    dispatch(getAllElements());
    console.log("storeConfig/UseEffect/List: ", list)
  }, [dispatch]);

  return (
    <ul>
      {list && list.map(element => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  );
}

export default Example;
