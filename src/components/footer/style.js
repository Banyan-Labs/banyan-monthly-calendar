import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.footer`
  position: fixed;
  width: 100%;
  padding: 0.5em;
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
  bottom: 0;
  background: #c4c4c4;
  color: #000;
`;
export const Logo = styled.img`
  padding: 0.3em 0em 0em 0.5em;
  width: 100px;
  height: 30px;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
export const FooterLinksContainer = styled.div`
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
  color: #000 !important;
  padding: 0.3em;
  @media screen and (max-width: 750px) {
    padding: 0.2em;
  }
`;
export const Button = styled.button`
  padding: 0.2em;
  margin: 0.1em;
`;
