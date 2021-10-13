import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row wrap;
`;
export const NavLinksContainer = styled.div`
  margin: 1em;
`;
export const NavLinks = styled(LinkR)`
  color: #000000;
  padding-right: 0.5em;
`;
export const Logo = styled.img`
  height: 35px;
  margin: 1em;
  @media screen and (max-width: 750px) {
    height: 30px;
  }
`;
