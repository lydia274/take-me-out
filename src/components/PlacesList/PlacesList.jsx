import React from 'react';
import PlaceCard from '../PlaceCard/PlaceCard';
import {PlacesListContainer} from './PlacesList.styled'

function PlacesList({places}) {
    console.log(PlaceCard)
  return (
    <>
    <PlacesListContainer>
      {places.map(place => (
        <PlaceCard key={place.id} place={place} /> 
      ))}
    </PlacesListContainer>
    </>
  )
}

export default PlacesList