import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  background-color: #29648a;
  border-bottom:#0b3c5d solid px;
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
  }
`;
export const NavLinksContainer = styled.div`
  margin: 12px 80px 0px 0px;
  padding-top: 3px;
  @media screen and (max-width: 750px) {
    margin-left: 13px;
    padding: 0px;
    width: 100%;
  }
`;
export const NavLinks = styled(LinkR)`
  color: white;
  text-decoration:none;
  margin-left: 20px;
  @media screen and (max-width: 750px) {
    margin-left: 25px;
    width: 100%;
  }
`;
export const Logo = styled.img`
  height: 35px;
  padding-bottom: 5px;
  margin: 15px 25px;
  @media screen and (max-width: 750px) {
    height: 30px;
    margin: 15px 0px 0px 10px;
    width: 100%;
  }
`;
