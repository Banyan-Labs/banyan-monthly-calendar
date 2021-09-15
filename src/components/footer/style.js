import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.footer`
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 7%;
  background: #c4c4c4;
  color: #000;
  @media screen and (max-width: 750px) {
    padding: 13px 0px 13px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
  }
`;
export const Logo = styled.img`
  margin: 10px 75px;
  padding-bottom: 5px;
  width: 100px;
  height: 30px;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
export const FooterLinksContainer = styled.div`
  margin-right: 40px;
  padding-top: 7px;
  color: #000 !important;
  @media screen and (max-width: 750px) {
    margin-left: 13px;
    padding: 0px;
    width: 100%;
  }
`;
export const FooterLink = styled(LinkR)`
  color: #000 !important;
  padding-right: 20px;
  @media screen and (max-width: 750px) {
    margin-left: 30px;
  }
`;
export const Button = styled.button`
  background: gray;
`;
