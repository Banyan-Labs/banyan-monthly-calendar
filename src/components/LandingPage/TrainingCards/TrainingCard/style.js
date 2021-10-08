import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px 5px;
  background: rgba(196, 196, 196, 0.15);
  @media screen and (max-width: 750px) {
    padding: 13px 0px 13px 0px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 26px;
`;
export const Title = styled.div`
  font-size: 20px;
  border-radius: 6px;
  background: #c4c4c4;
  text-align: center;
  width: 216px;
  height: 32px;
`;
export const Wrapper2 = styled.div`
  align-items: left;
  display: flex;
  justify-content: space-around;
  top: center;
  margin: 0% 0% 0% 0%;
  text-align: left;
  padding: 2%;
  @media screen and (max-width: 750px) {
    padding: 13px 0px 13px 0px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
  }
`;
export const Headshot = styled.div`
  margin-top: 20px 0px 12px 0px;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: left;
`;
export const Presenter = styled.div`
  margin-top: 70px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border-radius: 6px;
  background: #c4c4c4;
`;
export const Img = styled.div`
  width: 50%;
  border-radius: 50%;
`;
export const Text = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #c4c4c4;
  width: 96%;
  height: 100%;
  margin: 20px 30px 0px 0px;
  text-align: left;
`;
export const FirstInitial = styled.div`
  font-size: 65px;
  font-weight: 900px;
`;
