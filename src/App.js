import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState('');

  // Check if the address is written and press the enter then it will fetch the address from google.
  useEffect(() => {
    if (address) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA_v4JZzPBikDtXxsJteOgHnAsXHMBGa5E`
      )
        .then((resp) => resp.json())
        .then((res) => {
          setError('');
          setLat(res.results[0].geometry.location.lat);
          setLon(res.results[0].geometry.location.lng);
        })
        .catch((resaon) => {
          setError('No data was found.');
        });
    }
  }, [address]);
  // If the Address from google was connected and Lat and Lon were connected then another request will send to the openweathermap.org
  useEffect(() => {
    if (lat && lon) {
      //weatherbit api 50 request per day
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=8bbbf1c1b9ff4eb39a3c6bcc7e0165ed`
      )
        .then((resp) => resp.json())
        .then((res) => {
          // we get the response from weather api here.
          setWeatherData(res);
          console.log(res);
        })
        .catch((reason) => console.log(reason));
    }
  }, [lat, lon]);

  return (
    <div className="App">
      <Header ad={setAddress} err={error ? error : ''} />
      {weatherData && <Card data={weatherData} />}
    </div>
  );
}

export default App;
