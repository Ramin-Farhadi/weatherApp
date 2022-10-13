import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [weatherData, setWeatherData] = useState('');
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=41.7107&lon=72.2081&appid=839dabeab893a48daf8fab18b8dd7b87'
    )
      .then((resp) => resp.json())
      .then((res) => setWeatherData(res));
  }, []);
  console.log(weatherData);
  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
}

export default App;
