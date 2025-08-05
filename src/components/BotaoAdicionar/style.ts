import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variaveis from '../../styles/variaveis';

export const Circulo = styled(Link)`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`;
