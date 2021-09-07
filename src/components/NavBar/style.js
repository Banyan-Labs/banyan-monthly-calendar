import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  flex-direction: row wrap;
  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    padding: 13px 0px 0px 0px;
    width: 100%;
`;

export const NavLinksContainer = styled.div`
  margin-right: 80px;
  padding-top: 3px;
  margin-top: 12px;
  @media screen and (max-width: 750px) {
    margin-left: 13px;
    padding: 0px;
    width: 100%;
  }
`;

export const NavLinks = styled(LinkR)`
  color: #000000;
  text-decoration: underline;
  margin-left: 20px;
  @media screen and (max-width: 750px) {
    margin-left: 25px;
    width: 100%
  }
`;

export const Logo = styled.img`
  height: 35px;
 padding-bottom: 5px;
  margin: 15px 25px;
   @media screen and (max-width: 750px) {
    height: 30px;
    margin-top: 15px;
    margin-left: 10px
    width: 100%
  }
`;