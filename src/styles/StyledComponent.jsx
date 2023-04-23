import { Form } from "react-router-dom";
import styled, {css} from 'styled-components';

const BigTitle = styled.text`
    font-size: 32px;
    color: ${props => props.color || 'black'};
    font-weight: bolder;
`;

const SmaillTitle = styled.text`
    font-size: 18px;
    color: ${props => props.color || 'black'};
    font-weight: bolder;
`;

const Search = styled.div`
    font-size:16px;
    color: rgb(127, 127, 127);
    background-color : rgb(239, 239, 239);
    border-radius: 4px;
`;

const Button = styled.button`
  width: 80px;
  font-size:14px;
  padding: 5px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BlockBox = styled.div`
    background-color : white;
    border-radius: 20px;
`;

const Container = styled.div`
    background-color : #f3f3f3;
      
`;

const MyDiv = styled.div`
    background-color: red;
`;

export {BigTitle, SmaillTitle, Search, Button, BlockBox, Container, MyDiv};