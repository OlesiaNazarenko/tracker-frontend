import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultTable from "../ResultTable/ResultTable";
import { fetchAllReaders } from "../../redux/readers/readers-operations";
import {
  fetchAllCaptures,
  sendNewCapture,
} from "../../redux/captures/captures-operations";
import { fetchAllAthletes } from "../../redux/athletes/athletes-operations";
import capturesSelectors from "../../redux/captures/capture-selectors";
import readersSelectors from "../../redux/readers/readers-selectors";
export default function Home() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState();
  const [connected, setConnected] = useState(false);
  const getCapturesSelector = useSelector(capturesSelectors.getAllCapturesData);
  const readersData = useSelector(readersSelectors.getReaders);

  const captureData = getCapturesSelector.map((item) => {
    return {
      athlete_id: item.athlete.id,
      reader_id: item.reader_id,
      timestamp: item.timestamp,
    };
  });
  console.log(getCapturesSelector);
  console.log(captureData);
  useEffect(() => {
    dispatch(fetchAllReaders());
    dispatch(fetchAllCaptures());
    const socket = new WebSocket("ws://localhost:5000/");
    socket.onopen = () => {
      console.log("connected");
      setConnected(true);
      // socket.send(JSON.stringify(captureData));
    };
    socket.onmessage = (e) => {
      setMessages((prevState) => [...prevState, ...e.data]);
      console.log(e.data);
      dispatch(sendNewCapture(e.data));
    };
    dispatch(fetchAllAthletes());
    // captureData && dispatch(sendNewCapture(captureData));
    // setCaptureRequestData((prevcaptureRequestData) => [
    //   ...prevcaptureRequestData,
    //   ...captureData,
    // ]);
  }, []);
  // function connect() {
  //   socket.onopen = () => {
  //     if (socket.readyState == 1) {
  //       console.log("connected");
  //       console.log(socket.readyState);
  //       setConnected(true);
  //       socket.send(JSON.stringify(captureData));
  //     }
  //   };
  //   socket.onmessage = (e) => {
  //     const response = JSON.parse(e.data);
  //     console.log(response);
  //   };
  //   socket.onerror = () => console.log("error");
  //   // socket.current.onclose = () => console.log("closed");
  // }

  return connected ? <ResultTable /> : <div>Hello</div>;
}
