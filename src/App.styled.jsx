import styled from 'styled-components';
import * as colors from './assets/theme';

export const AppContainer = styled.div`
  font-family: 'Arial', sans-serif; // Choose a suitable font
  max-width: auto; 
  margin: 20px auto;
  padding: 20px;
  /* background-color: ${colors.vanillaSwirl}; // Use your color variables */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: ${colors.midnightBlue};
    margin-bottom: 20px;
  }
`;