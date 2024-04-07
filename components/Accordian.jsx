import "../styles.css";
import { useState } from "react";
import data from "../accordian/data";

const Accordian = () => {
  const [singleData, setSingleData] = useState(null);
  const [enableSelectedData, setEnableSelectedData] = useState(false);
  const [multipleData, setMultipleData] = useState([]);

  const spanData = (curentId) => {
    setSingleData(curentId);
  };

  const handleMultipleData = (id) => {
    const cpyMultiple = [...multipleData];

    const findIndexData = cpyMultiple.indexOf(id);

    if (findIndexData === -1) cpyMultiple.push(id);
    else cpyMultiple.slice(findIndexData, 1);

    setMultipleData(cpyMultiple);
  };
  return (
    <div className="wrapper">
      <button
        className="enable-button"
        onClick={() => setEnableSelectedData(!enableSelectedData)}
      >
        Enable Multiple Data
      </button>
      {data && data.length
        ? data.map((dataItem) => (
            <div className="question">
              <div className="contain">
                <h3>{dataItem.question}</h3>
                <div
                  className="enable"
                  onClick={
                    enableSelectedData
                      ? () => handleMultipleData(dataItem.id)
                      : () => spanData(dataItem.id)
                  }
                >
                  <span>+</span>
                </div>
              </div>
              {enableSelectedData
                ? multipleData.indexOf(dataItem.id) !== -1 && (
                    <div className="enable final">{dataItem.answer}</div>
                  )
                : singleData === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          ))
        : null}
    </div>
  );
};
export default Accordian;
