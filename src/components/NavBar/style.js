import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  background-color: #29648a;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row wrap;
`;
export const NavLinksContainer = styled.div`
  margin: 1em;
  padding-top: 0.5em;
`;
export const NavLinks = styled(LinkR)`
  color: white;
  text-decoration:none;
  padding-right: 0.5em;
  @media screen and (max-width: 750px) {
    margin-left: 25px;
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  background-color: white;
  border-bottom: #29648a 1.5px solid ;
  border-top: #29648a 1.5px solid ;
`;
export const Text = styled.div`
padding: 0.6em 7em 0.6em 9em;
color:white;
font-size:30px;

`;


export const Logo = styled.img`
  height: 35px;
  margin: 1em;
  @media screen and (max-width: 750px) {
    height: 30px;
  }
`;
