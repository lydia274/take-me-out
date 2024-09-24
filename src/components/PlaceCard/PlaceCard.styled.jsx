import styled from 'styled-components';
import * as colors from '../../assets/theme'

export const PlaceCardContainer = styled.div`
  width: 250px;
  height: auto;
  border-radius: 8px; 
  overflow: hidden;
  margin-bottom: 15px;
  box-shadow: 0 4px 5px ; /* More pronounced shadow */
  background-color: #fff; /* White background */
  transition: transform 0.2s; /* Smooth hover effect */


  &:hover {
    transform: translateY(-3px); /* Elevate on hover */
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .content {
    padding: 15px;

    h3 {
      margin-top: 0;
      font-size: 1.3rem;
      color: #333; /* Darker text */
    }

    p {
      margin-bottom: 8px;
      font-size: 0.9rem;
      color: #555;
    }

    button {
      margin-top: 10px;
      padding: 8px 15px;
      background-color: #1a73e8; /* Codecademy blue */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: #1756b1; 
      }
    }
  }
`;