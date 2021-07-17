import React from "react";
import "./style.css";
const Main = () => {
  const arr = [];
  const InputRef = React.createRef();
  for (var i = 0; i < 10; i++) {
    let temp = [];
    for (var j = 0; j < 10; j++) {
      temp.push(0);
    }
    arr.push(temp);
  }

  console.log(arr[0][0]);
  const handleChange = (e, i, j) => {
    const value = e.target.value;

    arr[i][j] = value;
  };

  const calc = (e) => {
    console.log(InputRef.value);
    console.log(e);
    if (e.key == "Enter") {
      const value = e.target.value;
      if (value.includes(",")) {
        const indexArr = value.split(",");
        console.log(InputRef);
        let sum = 0;
        for (let i = 0; i < indexArr.length; i += 2) {
          let temp = arr[indexArr[i]][indexArr[i + 1]];
          sum += temp;
        }

        arr[i][j] = sum;
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
                    id={`[${i}][${j}]`}
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
