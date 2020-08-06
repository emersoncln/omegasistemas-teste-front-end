import styled from "styled-components";
import {Paper as MuiPaper, Button as MuiButtom} from "@material-ui/core"

export const Container = styled.div`

.MuiButton-containedPrimary{
  background-color: #7159c1;
}

`;

export const Input = styled.input`
  margin: 10px;
  border-radius: 50px;
  height: 30px;
  width: 300px;
  background: white;
  color: blue;
`;

export const Button = styled(MuiButtom)`
display: inline-block;
  
`;

export const Box = styled.div`
  text-align: center;
  box-shadow: gray;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  background: #7159c1;
  color: white;
`;

export const Card = styled.div``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Title = styled.h1`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;


export const Paper = styled(MuiPaper)`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;