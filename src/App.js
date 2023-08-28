import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [time, setTime] = useState("");

  const url = "http://api.open-notify.org/iss-now.json";

  const fetchData = async () => {
    try {
      const location = await axios.get(url);
      setData(location);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
   
  },[latitude])
const newTime = new Date().toLocaleTimeString();

  const handleLocation = () => {
    setLatitude(data.data.iss_position.latitude);
    setLongitude(data.data.iss_position.longitude);
 
  };

  return (
    <div className="App">
      <h1 id="title">where's the space station?</h1>
      <div className="main-content">
        <img src="" alt="" />
        <div className="card-container">
         { !latitude ? <h2 style={{opacity: '0'}}>there's the space station!</h2> :
          <h2>there's the space station!</h2>}
          <div className="span-container">
            <span>latitude: {latitude ? latitude : "--"}</span>
            <span>longitude: {longitude ? longitude : "--"}</span>
            <span>T.O.L: {longitude ? newTime : "--"}</span>
          </div>
          <div className="btn-container">
            <button onClick={handleLocation}>Find the Station!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
