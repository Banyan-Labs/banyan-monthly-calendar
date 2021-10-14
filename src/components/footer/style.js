import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.footer`
  position: fixed;
  width: 100%;
  // padding: 0.5em;
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
  bottom: 0;
  height: 9%;
  background-color:#29658a;
`;
export const Logo = styled.img`
  padding: 0.3em 0.3em 0.3em 0.3em;
  width: 100px;
  height: 30px;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  height: 35px;
  padding: 0.5em;
  background-color: white;
  border-bottom: #29648a 1.5px solid ;
  border-top: #29648a 1.5px solid ;
`;

export const FooterLinksContainer = styled.div`
padding-top: 0.9em;
  margin-right: 2em;
  color: #000 !important;
  @media screen and (max-width: 750px) {
    margin-right: 1em;
    padding: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const FooterLink = styled(LinkR)`
  color: white !important;
  text-decoration:none;
  padding: 0.3em;
  @media screen and (max-width: 750px) {
    padding: 0.2em;
  }
`;
export const Button = styled.button`
  padding: 0.2em;
  margin: 0.1em;
  background-color:#25274d;
  color:white;
`;
