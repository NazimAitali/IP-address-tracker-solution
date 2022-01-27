import React, { useEffect, useState } from "react";
import "./styles.scss";
import { fetchIP, fetchGeoLocation } from "./scripts";
import Research from "./components/research";
import Card from "./components/card";
import Map from "./components/map";

const App = () => {
  const [myLocation, setMyLocation] = useState();
  const [temp, setTemp] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchIP(setMyLocation);
  }, []);
  useEffect(() => {
    fetchGeoLocation(myLocation, setData, setLoading, setError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myLocation]);

  return (
    <div className="App">
      <div className="Container">
        <header>
          <div className="Warning"></div>
          <div className="Title-content">
            <h1 className="Title">IP Address Tracker</h1>
          </div>
          <Research
            temp={temp}
            setTemp={setTemp}
            setError={setError}
            setMyLocation={setMyLocation}
          />
          <Card error={error} loading={loading} data={data} />
        </header>
        <main>
          <Map data={data} />
        </main>
      </div>
    </div>
  );
};

export default App;
