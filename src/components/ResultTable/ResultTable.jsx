import s from "./ResultTable.module.css";
import athletesSelectors from "../../redux/athletes/athletes-selectors";
import capturesSelectors from "../../redux/captures/capture-selectors";
import {
  fetchAllCaptures,
  sendNewCapture,
} from "../../redux/captures/captures-operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function ResultTable(e) {
  const [renderData, setRenderData] = useState([]);
  // const dispatch = useDispatch();
  // const getCapturesSelector = useSelector(capturesSelectors.getAllCapturesData);
  const athletes = useSelector(athletesSelectors.getAllAthletesSelector);

  const getExtensibleObj = athletes.map((item) => {
    return { ...item };
  });
  useEffect(() => {
    setRenderData(getExtensibleObj);
    // dispatch(fetchAllCaptures());/
  }, []);

  function getupdatedData(e) {
    const data = renderData.map((item) => {
      let newItem;
      if (item.name === e.nameA) {
        if (e.name === "Finišikoridori algus") {
          item.timestamp = e.timestamp;
        }
        if (e.name === "Finišikoridori lõpp") {
          item.captured = e.timestamp;
        }
        return item;
      }
      return (newItem = item);
    });
    return data;
  }

  console.log(
    getupdatedData({
      name: "Finišikoridori lõpp",
      timestamp: "3303",
      nameA: "George Walsh",
    })
  );
  // console.log(
  //   getupdatedData({
  //     name: "Finišikoridori algus",
  //     timestamp: "3303",
  //     nameA: "George Walsh",
  //   })
  // );

  const getTime = (date) => {
    // const date = new Date(data).toLocaleString("en-us", {
    //   day: "numeric",
    //   month: "numeric",
    //   year: "numeric",
    // });
    const getCorrectFormat = (date) => {
      return String(date).padStart(2, "0");
    };
    const getCorrectFormatMS = (date) => {
      return String(date).padStart(3, "0");
    };
    const time = `${getCorrectFormat(
      new Date(date).getHours()
    )}:${getCorrectFormat(new Date(date).getMinutes())}:${getCorrectFormatMS(
      new Date(date).getMilliseconds()
    )}`;
    const result = `${time}`;
    return result;
  };

  return (
    <table className={s.resultTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Start position</th>
          <th>Timestamp</th>
          <th>Captured</th>
          <th>Final position</th>
        </tr>
      </thead>
      <tbody>
        {renderData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.id}</td>
              <td>{item.timestamp ? getTime(item.timestamp) : ""}</td>
              <td>{item.captured ? getTime(item.captured) : ""}</td>
              <td>{item.finalPosition ? item.finalPosition : ""}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
