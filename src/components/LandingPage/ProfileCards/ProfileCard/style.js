import styled from "styled-components";

export const Card = styled.div`
  width: 340px;
  height: 353px;
  margin: 4px 5px;
  background:white;
  // background: rgba(196, 196, 196, 0.15);
  box-shadow: 3px 3px 0px #29648a;
  border-radius: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 26px;
`;
export const Headshot = styled.div`
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background: #25274d;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FirstInitial = styled.div`
  font-size: 65px;
  font-weight: 900px;
  color: white;
`;
export const Name = styled.div`
 
 text-decoration: underline #29648a;
  border-bottom: 3px;
  margin-bottom: 12px;
  text-align: center;
  font-size: 20px;
`;

export const Text = styled.div`
  width: 306px;
  height: 120px;
  padding: 8px;
  // box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
  //   0 17px 50px 0 rgba(0, 0, 0, 0.19);
  // background-color:#aaabb8;
  // scroll-behavior: auto;
  // overflow-y: scroll;
`;



