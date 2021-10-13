import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 320px;
    margin: 5px 5px ;
    border-radius: 10px;
    box-shadow: 3px 3px 0px #29648a;
    background:white;
    @media screen and (max-width: 750px) {
        padding:13px 0px 13px 0px;
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
    border-radius:10px;
    color:white;
    background-color:#29648a;
    padding:10px;
    text-align: center;
    font-size:20px;
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
    width: 107px;
    height: 107px;
    border-radius: 50%;
    background: #25274d;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: left;
`;
export const Presenter = styled.div`
    padding:10px;
    text-align: left;
    font-size:20px;
    border-radius: 6px;
`;
export const Img = styled.div`
    width:50%;
    border-radius:50%; 
`;
export const Text = styled.div`
    padding:10px;
    margin:20px 30px 0px 0px;
    text-align: left;
`;
export const FirstInitial = styled.div`
  font-size: 65px;
  font-weight: 900px;
  color: white;
`;
