import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [error, setError] = useState('');
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
          setError('No Data was found.');
        });
    }
  }, [address]);
  // If the Address from google was connected and Lat and Lon were connected then another request will send to the openweathermap.org
  useEffect(() => {
    if (lat && lon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=839dabeab893a48daf8fab18b8dd7b87`
      )
        .then((resp) => resp.json())
        .then((res) => {
          // we get the response from weather api here.
          console.log(res);
        })
        .catch((resaon) => setError('NO DATA FOUND please try again'));
    }
  }, [lat, lon]);

  return (
    <div className="App">
      <Header ad={setAddress} err={error ? error : ''} />
      <Card />
    </div>
  );
}

export default App;
