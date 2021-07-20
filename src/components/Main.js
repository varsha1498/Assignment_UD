import React, { useState, useEffect } from "react";
import "./style.css";
const Main = () => {
  let arr = [];
  const [grid, setGrid] = useState([]);
  let [hmap, setMap] = useState({});
  const [count, setCount] = useState(0);
  const InputRef = React.createRef();
  for (var i = 0; i < 10; i++) {
    let temp = [];
    for (var j = 0; j < 10; j++) {
      temp.push(0);
    }
    arr.push(temp);
  }
  // setGrid(arr);
  console.log("render");
  const handleChange = (e, i, j) => {
    let value = e.target.value;
    console.log("i+j", i + "" + j);
    let newObj = {};

    newObj = { ...hmap, [i + "" + j]: value };
    // hmap[i + "" + j] = parseInt(value);
    setMap(newObj);
    console.log(hmap);
  };

  const calc = (e) => {
    if (e.key == "Enter") {
      const value = e.target.value;
      const id = e.target.id;
      if (value.includes(",")) {
        const indexArr = value.split(",");
        let sum = 0;
        for (let i = 0; i < indexArr.length; i += 2) {
          if (!hmap[`${indexArr[i]}${indexArr[i + 1]}`]) {
            hmap[`${indexArr[i]}${indexArr[i + 1]}`] = 0;
          }
          sum = sum + parseInt(hmap[`${indexArr[i]}${indexArr[i + 1]}`]);
          console.log("sum", sum);
        }
        hmap[id] = sum;
        console.log("hmap", hmap);

        setCount(count + 1);
      }
    }
  };

  return (
    <div>
      {arr.map((ele, i) => {
        return (
          <tr>
            {ele.map((ele2, j) => {
              return (
                <td>
                  <input
                    className="cell"
                    id={`${i}${j}`}
                    value={hmap[i + "" + j]}
                    onChange={(e) => {
                      handleChange(e, i, j);
                    }}
                    onKeyPress={(e) => calc(e)}
                    ref={InputRef}
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </div>
  );
};

export default Main;
