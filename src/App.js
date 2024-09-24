
import React, {useState} from 'react';
import './App.styled.jsx';
import PlacesList from './components/PlacesList/PlacesList';
import parisData from './data/parisData.json';
import {AppContainer} from './App.styled.jsx'

function App() {

  const [places, setPlaces] = useState(parisData);

const addPlace = (newPlace) => {
  setPlaces([...places, newPlace]);
};
  return (
    <>
    <AppContainer>
      <h1>Take Me Out - Paris</h1>
      <PlacesList 
        places={places} 
      />
    </AppContainer>

    </>
  );
}

export default App;
