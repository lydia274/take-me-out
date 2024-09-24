import React from 'react';
import { PlaceCardContainer } from './PlaceCard.styled';

function PlaceCard({ place }) {
  return (
    <PlaceCardContainer>
      <div className="content">
        <h3>{place.name}</h3>
        <p>Type: {place.type} - {place.category}</p>
        <p>Address: {place.address}</p>
        <p>Zip Code: {place.zipCode}</p>
        <p>Cost: {place.cost}€</p>
        <p>Duration: {place.duration} minutes</p>
        <p>Rating: {place.rating} stars</p>
        {/* <button onClick={() => onUpdate(place)}>Edit</button> 
        <button onClick={() => onDelete(place.id)}>Delete</button> */}
      </div>
    </PlaceCardContainer>
  );
}

export default PlaceCard;