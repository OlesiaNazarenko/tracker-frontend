import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

// socket.onopen = function (e) {
//   console.log("Connected");
//   console.log("Hello Websocket!");
// };
// socket.onmessage = function (e) {
//   console.log("Message received: " + e.data);
//   // ws.close();
// };
export async function getAllReaders() {
  const result = await axios.get(`/readers`).then((response) => response.data);
  // console.log(result);
  return result;
}

export async function getReadersByID(id) {
  const result = axios.get(`/readers/${id}`).then((response) => response.data);
  // console.log(result);
  return result;
}

export async function getAllAthletes() {
  const result = await axios.get(`/athletes`).then((response) => response.data);
  return result;
}
export async function getAthleteByID(id) {
  const result = axios.get(`/athletes/${id}`).then((response) => response.data);
  return result;
}
export async function getAllCaptures() {
  const result = await axios.get(`/captures`).then((response) => response.data);
  return result;
}
export async function getCapturesByID(id) {
  const result = axios.get(`/captures/${id}`).then((response) => response.data);
  return result;
}
export function addNewCapture(data) {
  // socket.onopen = () => socket.send(JSON.stringify(data));
  console.log("data sent");
  return axios.post(`/captures`, data).then((response) => response.data);
}
