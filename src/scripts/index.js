export const fetchIP = (setMyLocation) => {
  fetch("https://api.ipify.org?format=json")
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Server responds with error!");
      }
      return response.json().then((result) => {
        setMyLocation(result.ip);
      });
    })
    .catch((error) => {
      console.log(`Error geting IP${error} `);
    });
};

export const fetchGeoLocation = (myLocation, setData, setLoading, setError) => {
  fetch(
    `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_N0ulYjYh6IUe2kyBe663XMlPae9QX&ipAddress=${
      myLocation ? myLocation : "8.8.8.8"
    }`
  )
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Server responds with error!");
      }
      console.log(response.status);
      return response.json().then((result) => {
        setData(result);
      });
    })
    .catch((error) => {
      setError(`${error}`);
    })
    .finally(() => {
      setLoading(false);
    });
};
